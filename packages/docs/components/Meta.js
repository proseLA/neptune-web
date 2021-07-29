import Types from 'prop-types';
import { parseISO, format } from 'date-fns';
import { printDate } from '../utils/pageUtils';

export default function Meta({ date, authors, version, tags }) {
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
  const renderVersion = () => (
    <ul className="p-l-2 m-y-1">
      {Object.entries(version).map(([key, value]) => (
        <li>
          <strong>{key}</strong>: {value}
        </li>
      ))}
    </ul>
  );

  const renderTags = () => (tags.length ? <span> - {tags.join(', ')} </span> : null);

  const createdDate = parseISO(date);
  return (
    <small>
      <div className="small m-b-2">
        {format(parseISO(date), 'MMMM dd, yyyy')} {renderTags()}
      </div>
      {renderVersion()}
      {printDate(createdDate)}
      {renderAuthors()}
    </small>
  );
}

Meta.propTypes = {
  date: Types.string.isRequired,
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
};
