import { parseISO } from 'date-fns';

import Meta from '../../components/Meta';
import { DocumentLink, getPagesInSection } from '../../utils/pageUtils';

const isBlogPost = (page) => !page?.linkText;

const Home = () => {
  const posts = getPagesInSection({ directory: 'blog' })
    .map(({ component: { meta } }) => meta)
    .filter(isBlogPost)
    .filter((sec) => !sec.hidden)
    .sort((post1, post2) => parseISO(post2.date) - parseISO(post1.date));

  return (
    <>
      {posts.map(({ name, date, authors, version, tags }, index) => {
        const fileName = `${date}-${name.toLowerCase().replace(/ /g, '-')}`;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`${index}`} className="m-b-3">
            <h2>
              <DocumentLink href={`/blog/${fileName}`}>{name}</DocumentLink>
            </h2>

            <Meta {...{ date, authors, version, tags }} />
          </div>
        );
      })}
    </>
  );
};

export const meta = {
  name: 'The latest news about Neptune Web',
  linkText: 'Home',
};

export default Home;
