import PropTypes from 'prop-types';
import Flex from '../flex';
import Box from '../box';

const Direction = { default: 'row', xs: 'row', sm: 'row', md: 'row', lg: 'row' };

const ThreeColumns = ({ firstColumn = {}, secondColumn = {}, thirdColumn = {} }) => {
  return (
    <Flex
      direction={Direction}
      marginX={0}
      paddingX={0}
      paddingY={0}
      marginY={0}
      className="PageLayout__Inner"
    >
      {firstColumn.content && (
        <Box
          size={{
            default: 0,
            xs: 0,
            sm: 0,
            md: 0,
            lg: 200,
            xl: 200,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          tagHtml="header"
          className={`Header ${firstColumn.className || ''}`}
        >
          {firstColumn.content}
        </Box>
      )}
      {secondColumn.content && (
        <Box
          size={{
            default: 0,
            xs: 0,
            sm: 220,
            md: 220,
            lg: 220,
            xl: 220,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className="Sidebar"
        >
          {secondColumn.content}
        </Box>
      )}
      <Flex
        direction={Direction}
        marginX={0}
        paddingX={0}
        paddingY={0}
        marginY={0}
        className={`Flex__Container ${secondColumn.className || ''}`}
      >
        <Box
          size={{
            default: 1,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className={`Box__Container ${thirdColumn.className || ''}`}
        >
          {thirdColumn.content}
        </Box>
      </Flex>
    </Flex>
  );
};

ThreeColumns.propTypes = {
  firstColumn: PropTypes.shape({
    column: PropTypes.node.isRequired,
    className: PropTypes.string,
  }),
  secondColumn: PropTypes.shape({
    column: PropTypes.node.isRequired,
    className: PropTypes.string,
  }),
  thirdColumn: PropTypes.shape({
    column: PropTypes.node.isRequired,
    className: PropTypes.string,
  }).isRequired,
};

ThreeColumns.defaultProps = {
  firstColumn: null,
  secondColumn: null,
};

export default ThreeColumns;
