import { parseISO } from 'date-fns';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import { getPagesInSection } from '../utils/pageUtils';

import Badge from './Badge';
import Link from './Link';

const getLinks = ({ pathname, section }) => {
  return getPagesInSection(section).map(({ group, component, path }, index) => {
    const key = index.toString();
    if (group) {
      return {
        content: (
          <li key={key} className="Nav__Group m-t-2">
            {group}
          </li>
        ),
      };
    }
    const isSelected = pathname === path;
    const name = component.meta.linkText || component.meta.name;
    const { badge } = component.meta;

    return {
      content: (
        <li key={key}>
          <Link href={path}>
            <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
              {name}
              {badge ? (
                <Badge expiryDate={parseISO(badge.expiryDate)} className="m-l-1">
                  {badge.type}
                </Badge>
              ) : null}
            </a>
          </Link>
        </li>
      ),
      name: name.toLowerCase(),
    };
  });
};

const Sidebar = ({ router: { pathname }, section }) => {
  const [links, updateLinks] = useState(getLinks({ pathname, section }));
  const [filteredLinks, updateFilteredLinks] = useState(links.map(({ content }) => content));

  const [searchInput, updateSearchInput] = useState('');
  const searchElement = useRef(null);
  const scrollableNavElement = useRef(null);

  useEffect(() => {
    const top = localStorage.getItem('sidebar-scroll');

    if (top) {
      scrollableNavElement.current.scrollTop = parseInt(top, 10);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (searchInput) {
      const searchString = searchInput.toLowerCase();
      updateFilteredLinks(
        links
          .filter(({ name }) => typeof name !== 'string' || name.includes(searchString))
          .map(({ content }) => content),
      );
    } else {
      updateFilteredLinks(links.map(({ content }) => content));
    }
  }, [searchInput, links]);

  useEffect(() => {
    updateSearchInput('');
    updateLinks(getLinks({ pathname, section }));
  }, [section]);

  useEffect(() => {
    updateLinks(getLinks({ pathname, section }));
  }, [pathname]);

  const handleKeyDown = (event) => {
    // Allow user to type slash into liveEditor.
    if (
      event.target.className !== 'npm__react-simple-code-editor__textarea' &&
      (event.code === 'Slash' || event.keyCode === 191)
    ) {
      event.preventDefault();
      if (searchElement.current !== null) {
        searchElement.current.focus();
      }
    }
  };

  return (
    <div className="Sidebar__Fixed" role="navigation" aria-label="Secondary navigation">
      <div className="Sidebar__Header">
        <h5 className="Sidebar__Title">{section.title}</h5>
      </div>
      {section.searchable && (
        <input
          ref={searchElement}
          className="Sidebar__Search"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(event) => updateSearchInput(event.target.value)}
        />
      )}
      <div className="Sidebar__Inner">
        <ul ref={scrollableNavElement} className="Nav">
          {filteredLinks}
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        directory: PropTypes.string.isRequired,
      }),
    ),
    searchable: PropTypes.bool,
  }).isRequired,
};

export default withRouter(Sidebar);
