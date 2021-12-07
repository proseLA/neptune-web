import { parseISO, format } from 'date-fns';
import Types from 'prop-types';
import React from 'react';

import { printDate } from '../utils/pageUtils';

const Meta = ({ date, authors, version, tags, compactVersion }) => {
  const renderAuthors = () => (
    <>
      {authors?.map(({ name, githubUsername }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${index}`}>
          {index === 0 && ' by '}
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
            {name}
          </a>
          {index < authors.length - 1 && ', '}
          {index === authors.length - 2 && ' and '}
        </span>
      ))}
    </>
  );
  const renderVersionCompact = () => (
    <div className="m-y-1">
      {Object.entries(version).map(([key, value]) => (
        <React.Fragment key={key}>
          <strong>{key}</strong>: {value}{' '}
        </React.Fragment>
      ))}
    </div>
  );

  const renderVersionList = () => (
    <ul className="p-l-2 m-y-1">
      {Object.entries(version).map(([key, value]) => (
        <li key={key}>
          <strong>{key}</strong>: {value}
        </li>
      ))}
    </ul>
  );

  const renderTags = () => (tags.length > 0 ? <span> - {tags.join(', ')} </span> : null);

  const createdDate = parseISO(date);
  return (
    <small>
      <div className="body-2 m-b-2">
        {format(parseISO(date), 'MMMM dd, yyyy')} {renderTags()}
      </div>
      {compactVersion ? renderVersionCompact() : renderVersionList()}
      {printDate(createdDate)}
      {renderAuthors()}
    </small>
  );
};

Meta.propTypes = {
  date: Types.string.isRequired,
  compactVersion: Types.bool,
  authors: Types.arrayOf(
    Types.shape({
      name: Types.string.isRequired,
      githubUsername: Types.string.isRequired,
    }),
  ).isRequired,
  version: Types.shape({
    components: Types.string,
    css: Types.string,
    'dynamic-flows': Types.string,
    validation: Types.string,
    'less-config': Types.string,
    'test-config': Types.string,
  }),
  tags: Types.arrayOf(Types.string),
};

Meta.defaultProps = {
  version: {},
  tags: [],
  compactVersion: false,
};

export default Meta;
