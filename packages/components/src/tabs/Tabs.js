import classNames from 'classnames';
import clamp from 'lodash.clamp';
import PropTypes from 'prop-types';
import { Component, Fragment } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';

import { Size, Width, Direction } from '../common';
import KeyCodes from '../common/keyCodes';
import { DirectionContext } from '../provider/direction';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import {
  getElasticDragDifference,
  getSwipeDifference,
  swipedLeftToRight,
  swipedRightToLeft,
  swipeShouldChangeTab,
  getVelocity,
} from './utils';

const MIN_INDEX = 0;

const enabledTabsFilter = (tab) => !tab.disabled;

const SpacerWidth = { default: 0, xs: 8, sm: 16, md: 24, lg: 32 };

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      translateX: 0,
      translateFrom: 0,
      translateTo: 0,
      translateLineX: null,
      isAnimating: false,
      isSwiping: false,
      isScrolling: false,
      lastSwipeVelocity: 0,
      fullWidthTabs: props.headerWidth === Width.BLOCK,
    };
  }

  container = null;

  containerWidth = 0;

  tabRefs = [];

  get filteredTabsLength() {
    return this.props.tabs.filter(enabledTabsFilter).length;
  }

  get MAX_INDEX() {
    return this.props.tabs.length - 1;
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setTabWidth();
    this.switchTab(clamp(selected, MIN_INDEX, this.MAX_INDEX));
    this.animateToTab(clamp(selected, MIN_INDEX, this.MAX_INDEX), true);
    document.body.addEventListener('touchmove', this.disableScroll, { passive: false });
    document.body.addEventListener('touchforcechange', this.disableScroll, { passive: false });
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(previousProps, previousState) {
    const currentSelected = this.props.selected;
    const previousSelected = previousProps.selected;
    const currentSelectedTab = this.props.tabs[currentSelected];
    const currentSelectedTabIsDisabled = currentSelectedTab && currentSelectedTab.disabled;
    const previousSelectedTab = previousProps.tabs[previousSelected];
    const previousSelectedTabIsDisabled = previousSelectedTab && previousSelectedTab.disabled;
    const currentTabsLength = this.props.tabs.length;
    const previousTabsLength = previousProps.tabs.length;
    const currentDisabledTabsLength = this.props.tabs.filter(enabledTabsFilter).length;
    const previousDisabledTabsLength = previousProps.tabs.filter(enabledTabsFilter).length;
    const currentHeaderWidth = this.props.headerWidth;
    const previousFullHeaderWidth = previousProps.headerWidth;
    const { animatePanelsOnClick } = this.props;
    const instantOnClick = !animatePanelsOnClick && !previousState.isSwiping;

    if (
      currentHeaderWidth !== previousFullHeaderWidth ||
      currentTabsLength !== previousTabsLength
    ) {
      this.setTabWidth();
    }

    if (
      currentSelected !== previousSelected ||
      currentDisabledTabsLength !== previousDisabledTabsLength ||
      currentSelectedTabIsDisabled !== previousSelectedTabIsDisabled
    ) {
      this.animateToTab(
        clamp(currentSelected, MIN_INDEX, this.MAX_INDEX),
        currentSelected === previousSelected || instantOnClick,
      );
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', this.disableScroll);
    document.body.removeEventListener('touchforcechange', this.disableScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setContainerWidth(this.container);

    this.setState(({ selectedTabIndex }) => ({
      translateTo: -(this.containerWidth * selectedTabIndex),
    }));
  };

  setContainerRefAndWidth = (node) => {
    this.container = node;
    this.setContainerWidth(node);
  };

  setContainerWidth = (node) => {
    if (!node) {
      return;
    }

    const { width } = node.getBoundingClientRect();

    this.containerWidth = width;
  };

  isTabDisabled = (index) => {
    const { tabs } = this.props;

    return tabs[index] && tabs[index].disabled;
  };

  getAllTabsWidth = () => {
    return this.tabRefs
      .map((reference) => {
        return reference ? reference.getBoundingClientRect().width : 0;
      })
      .reduce((a, b) => a + b, 0);
  };

  getDistanceToSelectedTab = (selectedTabIndex) => {
    return this.tabRefs
      .filter((_, idx) => idx < selectedTabIndex)
      .map((reference) => (reference ? reference.getBoundingClientRect().width : 0))
      .reduce((a, b) => a + b, 0);
  };

  setTabWidth = () => {
    const { fullWidthTabs } = this.state;
    const { headerWidth, selected } = this.props;

    const allTabsWidth = this.getAllTabsWidth();

    if (!fullWidthTabs && (headerWidth === Width.BLOCK || this.containerWidth < allTabsWidth)) {
      this.setState({ fullWidthTabs: true, translateLineX: `${selected * 100}%` });
    }
    if (fullWidthTabs && headerWidth === Width.AUTO && this.containerWidth >= allTabsWidth) {
      this.setState({
        fullWidthTabs: false,
        translateLineX: `${this.getDistanceToSelectedTab(selected)}px`,
      });
    }
  };

  getTabLineWidth = () => {
    const { fullWidthTabs } = this.state;
    const { selected, tabs } = this.props;

    if (fullWidthTabs) {
      return `${(1 / tabs.length) * 100}%`;
    }

    const reference = this.tabRefs[selected] || this.tabRefs[this.tabRefs.length - 1];
    const width = reference ? reference.getBoundingClientRect().width : 0;
    return `${width}px`;
  };

  /*
   * Gets the next tab that should be selected based on the swipe direction
   * and the current selected tab (is called recursively to account for disabled tabs).
   */
  getTabToSelect = (selected, start, end) => {
    let nextSelected = selected;

    if (swipedLeftToRight(start, end)) {
      nextSelected -= 1;

      if (nextSelected > MIN_INDEX && this.isTabDisabled(nextSelected)) {
        return this.getTabToSelect(nextSelected, start, end);
      }
    } else if (swipedRightToLeft(start, end)) {
      nextSelected += 1;

      if (nextSelected < this.MAX_INDEX && this.isTabDisabled(nextSelected)) {
        return this.getTabToSelect(nextSelected, start, end);
      }
    }

    nextSelected = clamp(
      nextSelected,
      Math.max(selected - 1, MIN_INDEX),
      Math.min(selected + 1, this.MAX_INDEX),
    );

    if (this.isTabDisabled(nextSelected)) {
      return selected;
    }

    return nextSelected;
  };

  swipedOverHalfOfContainer = (difference) => difference / this.containerWidth >= 0.5;

  calculateApplicableDragDifference = ({ currentSelected, nextSelected, start, end }) => {
    const difference = getSwipeDifference(start, end);
    const elasticDrag = getElasticDragDifference(difference);

    if (swipedLeftToRight(start, end)) {
      if (currentSelected > MIN_INDEX && currentSelected !== nextSelected) {
        return Math.min(difference, this.containerWidth);
      }
      return elasticDrag;
    }
    if (swipedRightToLeft(start, end)) {
      if (currentSelected < this.MAX_INDEX && currentSelected !== nextSelected) {
        return -Math.min(difference, this.containerWidth);
      }
      return -elasticDrag;
    }

    return false;
  };

  switchTab = (index) => {
    const { onTabSelect } = this.props;
    onTabSelect(index);
  };

  getTabIndexWithoutDisabledTabs(index) {
    return index - this.props.tabs.slice(0, index).filter((tab) => !enabledTabsFilter(tab)).length;
  }

  animateToTab = (index, instant) => {
    this.animateLine(index);

    this.animatePanel(this.getTabIndexWithoutDisabledTabs(index), instant);
  };

  animateLine = (index) => {
    this.setState((previousState) => ({
      translateLineX: previousState.fullWidthTabs
        ? `${index * 100}%`
        : `${this.getDistanceToSelectedTab(index)}px`,
    }));
  };

  // Pass `instant` to set the `translateX` to the new panel with no transition
  animatePanel = (index, instant = false) => {
    const { translateTo: currentTranslateTo } = this.state;

    const translateFrom = currentTranslateTo;
    const translateTo = -(this.containerWidth * index);

    this.setState({
      selectedTabIndex: index,
      isAnimating: !instant && translateFrom !== translateTo,
      translateFrom,
      translateTo,
    });
  };

  disableScroll = (event) => {
    const { isSwiping } = this.state;

    if (isSwiping) {
      event.preventDefault();
    }
  };

  handleTabClick = (index) => () => {
    this.switchTab(index);
  };

  onKeyDown = (index) => (event) => {
    if (event && event.keyCode === KeyCodes.ENTER) {
      this.switchTab(index);
    }
  };

  handleTouchStart = (event) => {
    const start = {
      x: event.nativeEvent.touches[0].clientX,
      y: event.nativeEvent.touches[0].clientY,
      time: Date.now(),
    };
    this.setState({
      start,
      currentSwipe: [start],
    });

    event.persist();
  };

  handleTouchMove = (event) => {
    const { start } = this.state;
    const { selected: currentSelectedFromProps } = this.props;
    const selected = this.getTabIndexWithoutDisabledTabs(currentSelectedFromProps);
    const end = {
      x: event.nativeEvent.changedTouches[0].clientX,
      y: event.nativeEvent.changedTouches[0].clientY,
      time: Date.now(),
    };
    const difference = getSwipeDifference(start, end);
    const yAxisDifference = getSwipeDifference(start, end, 'y');
    let { isScrolling, isSwiping } = this.state;

    event.persist();

    if (!isScrolling && !isSwiping) {
      if (difference > yAxisDifference) {
        isSwiping = true;
      } else {
        isScrolling = true;
      }
    }

    this.setState({ isScrolling, isSwiping });

    if (isSwiping) {
      const nextSelected = this.getTabToSelect(currentSelectedFromProps, start, end);

      this.animateLine(
        this.swipedOverHalfOfContainer(difference) ? nextSelected : currentSelectedFromProps,
      );

      const dragDifference = this.calculateApplicableDragDifference({
        currentSelected: currentSelectedFromProps,
        nextSelected,
        start,
        end,
      });

      const translateX = dragDifference
        ? -(this.containerWidth * selected) + dragDifference
        : false;

      this.setState((state) => ({
        currentSwipe: [...state.currentSwipe, end],
        translateFrom: translateX || state.translateFrom,
        translateTo: translateX || state.translateTo,
      }));
    }
  };

  handleTouchEnd = (event) => {
    const { start, isSwiping } = this.state;
    const { selected } = this.props;
    const end = {
      x: event.nativeEvent.changedTouches[0].clientX,
      y: event.nativeEvent.changedTouches[0].clientY,
      time: Date.now(),
    };
    const difference = getSwipeDifference(start, end);
    const velocity = getVelocity([...this.state.currentSwipe, end]);

    this.setState({
      currentSwipe: [],
    });

    let nextSelected = selected;

    event.persist();

    if (isSwiping) {
      if (swipeShouldChangeTab(start, end) || this.swipedOverHalfOfContainer(difference)) {
        nextSelected = this.getTabToSelect(nextSelected, start, end);
      }

      if (nextSelected !== selected) {
        this.switchTab(nextSelected);

        this.setState({
          lastSwipeVelocity: velocity,
        });
      } else {
        this.animateToTab(nextSelected);
      }
    }

    this.setState({ isSwiping: false, isScrolling: false });
  };

  render() {
    const { tabs, changeTabOnSwipe, name, selected, className, transitionSpacing, headerWidth } =
      this.props;
    const {
      isSwiping,
      translateLineX,
      isAnimating,
      translateFrom,
      translateTo,
      lastSwipeVelocity,
      fullWidthTabs,
    } = this.state;

    const spacer = SpacerWidth[transitionSpacing];

    const tabsLength = this.filteredTabsLength;

    const distanceSwiped = Math.abs(-translateFrom - this.containerWidth * selected);

    const remainingContainerToTravel = isSwiping
      ? 1 - distanceSwiped / this.containerWidth
      : 1 - Math.abs(distanceSwiped / this.containerWidth - 1);

    const restrictedVelocity =
      (Number.isNaN(remainingContainerToTravel) ? 0 : remainingContainerToTravel) *
      Math.min(10 * Math.E, lastSwipeVelocity * 10 * Math.E);

    const hidePanelOverflow = isAnimating || isSwiping;

    const sliderWidth = tabsLength * this.containerWidth + spacer * 2;

    // Uses `props.panelTransitionSpacing` to add a spacer in-between the `TabPanel` you're transitioning to/from
    const Spacer = ({ id }) =>
      spacer > 0 && (
        <div
          key={id}
          style={{
            width: spacer,
            display: hidePanelOverflow ? 'block' : 'none',
          }}
        />
      );

    return (
      <DirectionContext.Consumer>
        {(direction) => {
          const isRTL = direction === Direction.RTL;
          return (
            <div
              className={classNames('tabs', className, {
                'tabs--auto-width': headerWidth === Width.AUTO,
              })}
              onTouchStart={changeTabOnSwipe ? this.handleTouchStart : undefined}
              onTouchEnd={changeTabOnSwipe ? this.handleTouchEnd : undefined}
              onTouchMove={changeTabOnSwipe ? this.handleTouchMove : undefined}
            >
              <TabList>
                {tabs.map(({ title, disabled }, index) => {
                  return (
                    <Tab
                      key={title}
                      ref={(node) => {
                        this.tabRefs[index] = node;
                      }}
                      id={`${name}-tab-${index}`}
                      panelId={`${name}-panel-${index}`}
                      selected={selected === index}
                      disabled={disabled}
                      focusTab={() => {
                        this.tabRefs[index].focus();
                      }}
                      onClick={disabled ? null : this.handleTabClick(index)}
                      onKeyDown={this.onKeyDown(index)}
                      {...(fullWidthTabs
                        ? { style: { width: `${(1 / tabs.length) * 100}%` } }
                        : {})}
                    >
                      {title}
                    </Tab>
                  );
                })}
                {translateLineX ? (
                  <div
                    className={classNames('tabs__line')}
                    style={{
                      width: this.getTabLineWidth(),
                      transform: isRTL
                        ? `translateX(-${translateLineX})`
                        : `translateX(${translateLineX})`,
                    }}
                  />
                ) : null}
              </TabList>
              <div
                ref={this.setContainerRefAndWidth}
                className="tabs__panel-container"
                style={{
                  overflow: hidePanelOverflow ? 'hidden' : 'visible',
                }}
              >
                <Spring
                  from={{
                    transform: `translateX(${translateFrom - spacer}px)`,
                  }}
                  to={{
                    transform: `translateX(${translateTo - spacer}px)`,
                  }}
                  config={{
                    precision: isSwiping ? 1 : 0.01,
                    velocity: !isSwiping ? restrictedVelocity : 0,
                    clamp: true,
                  }}
                  onRest={() => {
                    if (isAnimating) {
                      this.setState({
                        isAnimating: false,
                        lastSwipeVelocity: 0,
                      });
                    }
                  }}
                >
                  {(props) => (
                    <div
                      className="tabs__slider"
                      style={{
                        width: hidePanelOverflow ? `${sliderWidth}px` : '100%',
                        transform: hidePanelOverflow ? props.transform : 'translateX(0px)',
                      }}
                    >
                      {tabs.map(({ content, disabled }, index) =>
                        !disabled ? (
                          <Fragment key={`${tabs[index].title}-fragment`}>
                            {index === selected && <Spacer id="left-spacer" />}
                            <TabPanel
                              key={tabs[index].title}
                              tabId={`${name}-tab-${index}`}
                              id={`${name}-panel-${index}`}
                              style={{
                                width: hidePanelOverflow ? `${this.containerWidth}px` : '100%',
                                display: hidePanelOverflow || index === selected ? 'block' : 'none',
                              }}
                            >
                              {content}
                            </TabPanel>
                            {index === selected && <Spacer id="right-spacer" />}
                          </Fragment>
                        ) : null,
                      )}
                    </div>
                  )}
                </Spring>
              </div>
            </div>
          );
        }}
      </DirectionContext.Consumer>
    );
  }
}

const SpacerSizes = { ...Size, NONE: 'default' };

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  animatePanelsOnClick: PropTypes.bool,
  changeTabOnSwipe: PropTypes.bool,
  className: PropTypes.string,
  transitionSpacing: PropTypes.oneOf(['default', 'xs', 'sm', 'md', 'lg']),
  headerWidth: PropTypes.oneOf(['auto', 'block']),
};

Tabs.defaultProps = {
  animatePanelsOnClick: false,
  changeTabOnSwipe: true,
  className: '',
  transitionSpacing: SpacerSizes.NONE,
  headerWidth: Width.BLOCK,
};

export default Tabs;
