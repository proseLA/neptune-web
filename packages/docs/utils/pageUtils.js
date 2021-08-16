import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

/**
 * Check if date is past date
 *
 * @param {Date | null | undefined} endDate test date
 * @returns {boolean} `true` if date is less than today or equal `null` / `undefined`,
 * otherwise returns `false`
 */
export function isExpired(endDate) {
  return endDate?.getTime() <= Date.now();
}

export function printDate(date) {
  return formatDistance(date, Date.now(), {
    addSuffix: true,
  });
}

const getPages = () => {
  const req = require.context('../pages/', true, /mdx$|tsx$/);

  return req.keys().map((filePath) => {
    // Chop off the './' and file extention
    const pathParts = filePath.slice(2, filePath.lastIndexOf('.')).split('/');
    const path = `/${pathParts.join('/')}`;
    const slug = pathParts.pop();

    return {
      rootDir: pathParts[0],
      component: req(filePath),
      slug,
      path,
    };
  });
};

const pages = getPages();

const pagesByPath = pages.reduce((accumulator, page) => {
  accumulator[page.path] = page;
  return accumulator;
}, {});

const pageInSection = (page, directory) => page.path.indexOf(directory) === 1;

const getPagesInOrder = (directory, fileOrder) =>
  fileOrder.map((fileName) => pagesByPath[`/${directory}/${fileName}`]);

/**
 * Given a path, find a matching page.
 *
 * @param pathname
 */
export const getPageFromPath = (pathname) => pagesByPath[pathname];

/**
 * Pass in a section name and get an ordered list of page objects belonging to the section.
 * Page order is defined in sections.js.
 *
 * @param section
 */
export const getPagesInSection = (section) => {
  if (section.children) {
    const links = [];
    section.children.forEach(({ dir, title, fileOrder }) => {
      links.push({ group: title });

      if (fileOrder) {
        links.push(...getPagesInOrder(dir, fileOrder));
      } else {
        links.push(...pages.filter((page) => pageInSection(page, dir)));
      }
    });
    return links;
  }

  if (section.fileOrder) {
    return getPagesInOrder(section.dir, section.fileOrder);
  }
  return pages.filter((page) => pageInSection(page, section.dir));
};

/**
 * Pass in a section name and get the first page (in order) in response.
 *
 * @param section
 */
export const getFirstPageInSection = (section) => {
  if (section.fileOrder) {
    return pagesByPath[`/${section.dir}/${section.fileOrder[0]}`];
  }

  let { dir } = section;

  if (section.children) {
    const firstChild = section.children[0];
    if (firstChild.fileOrder) {
      return pagesByPath[`/${firstChild.dir}/${firstChild.fileOrder[0]}`];
    }
    dir = firstChild.dir;
  }

  return pages.find((p) => p.path.indexOf(dir) === 1);
};

/**
 * @param {string} url
 */
export const addBasePath = (url) =>
  `${process.env.ASSET_PREFIX}/${url.indexOf('/') === 0 ? url.slice(1) : url}`;

export const DocumentLink = ({ href, children }) => <a href={addBasePath(href)}>{children}</a>;

DocumentLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
