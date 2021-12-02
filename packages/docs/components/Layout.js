import { Switch, Direction, Button, Priority } from '@transferwise/components';
import { parseISO } from 'date-fns';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { useDirection } from '../hooks/useDirection';
import { getFirstPageInSection, getPageFromPath } from '../utils/pageUtils';
import sections from '../utils/sections';

import Badge from './Badge';
import Link from './Link';
import Meta from './Meta';
import Sidebar from './Sidebar';
import ThreeColumnLayout from './layout/threeColumnLayout';

const githubURL = `https://github.com/transferwise/neptune-web/edit/main/packages/docs/pages`;

const Layout = ({ children, router: { pathname } }) => {
  const pathParts = pathname.split('/');
  const rootDirectory = pathParts[1];
  const page = getPageFromPath(pathname);
  const editPath = `${githubURL}${pathname}.mdx`;

  const [direction, setDirection] = useDirection();

  const firstContent = (
    <div className="Header__Fixed" role="navigation" aria-label="Primary navigation">
      <div className="Header__Brand">
        <Link href="/">
          <a className="Logo">
            <img
              src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg"
              alt="Wise Logo"
            />
            <span className="sr-only">Wise</span>
          </a>
        </Link>
      </div>
      <ul className="Nav Nav--dark">
        <li className="Nav__Group">Content</li>
        {sections
          .filter((sec) => !sec.hidden)
          .map((section) => (
            <li key={section.title}>
              <Link href={getFirstPageInSection(section).path}>
                <a className={`Nav__Link ${rootDirectory === section.directory ? 'active' : ''}`}>
                  {section.title}
                  {section.badge ? (
                    <Badge expiryDate={parseISO(section.badge.expiryDate)} className="m-l-1">
                      {section.badge.type}
                    </Badge>
                  ) : null}
                </a>
              </Link>
            </li>
          ))}
        <li className="Nav__Group">Config</li>
        <li className="d-flex align-items-center">
          <label id="direction-label" htmlFor="switchId" className="Nav__Link">
            Force RTL layout
          </label>
          <div>
            <Switch
              checked={direction === Direction.RTL}
              className="m-x-2"
              aria-labelledby="direction-label"
              id="switchId"
              onClick={() =>
                setDirection(direction === Direction.LTR ? Direction.RTL : Direction.LTR)
              }
            />
          </div>
        </li>
      </ul>
    </div>
  );

  let secondContent = null;
  if (page) {
    const section = sections.find(({ directory }) => directory === rootDirectory);
    if (section.sidebar !== false) {
      secondContent = <Sidebar {...{ section }} />;
    }
  }

  const thirdContent = (
    <div className="Content" role="main">
      {page ? (
        <>
          <h1 className="colored-dot">{page.component.meta.name}</h1>
          {page.component.meta.date ? (
            <Meta
              {...{
                date: page.component.meta.date,
                authors: page.component.meta.authors,
                version: page.component.meta.version,
              }}
              compactVersion
            />
          ) : null}
        </>
      ) : null}
      {children}
      <Button
        className="m-t-4"
        priority={Priority.SECONDARY}
        onClick={() => {
          window.location.href = editPath;
        }}
      >
        Edit these docs on Github
      </Button>
    </div>
  );

  return (
    <ThreeColumnLayout
      firstContent={firstContent}
      secondContent={secondContent}
      thirdContent={thirdContent}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default withRouter(Layout);
