/**
 * This defines the layout of the docs page, which has two columns and a content panel.
 *
 * Items at the top level will appear in the first, leftmost column. They must have a title and
 * provide the directory where content files live.
 *
 * If you want to group content, you can specify groups by providing a children property. This
 * should be an array of groups, each with a title and dir.
 *
 * By default, files will appear in alphabetical order. To specify an order, use the fileOrder
 * property inside a group, and pass the file names (without extension) in the order you'd like
 * them to appear.
 *
 * Note that you cannot mix groups and individual files - if you decide to use groups, all children
 * files in that section must be in a group.
 */
interface Badge {
  type: string;
  /**
   * Date format: yyyy-mm-dd
   */
  expiryDate?: string;
}

interface Author {
  name: string;
  githubUsername: string;
}

interface Version {
  components?: string;
  css?: string;
  'dynamic-flows'?: string;
  validation?: string;
  'less-config'?: string;
  'test-config'?: string;
}

export type Meta = {
  name: string;
  /**
   * date format: yyyy-mm-dd
   */
  date?: string;
  authors?: Author[];
  badge?: Badge;
  version?: Version;
  tags?: string[];
};

interface SubSection {
  title: string;
  directory: string;
  fileOrder?: string[];
  badge?: Badge;
}

interface MainSection extends SubSection {
  children?: SubSection[];
  searchable?: boolean;
  hidden?: boolean;
  sidebar?: boolean;
}

const sections: MainSection[] = [
  {
    title: 'Getting started',
    directory: 'about',
    fileOrder: ['Home', 'Setup', 'Styles', 'BrowserSupport', 'Versioning', 'Contributing'],
  },
  {
    title: 'Styles',
    directory: 'styles',
    children: [
      {
        title: 'Core',
        directory: 'styles/core',
        fileOrder: ['Typography'],
      },
      {
        title: 'Addons',
        directory: 'styles/addons',
        fileOrder: ['BackgroundUtilities', 'DisplayUtilities', 'SpacingUtilities'],
      },
      {
        title: 'Tokens',
        directory: 'styles/tokens',
        fileOrder: ['Colors', 'Sizes', 'Breakpoints'],
      },
      {
        title: 'Extras',
        directory: 'styles/extras',
      },
    ],
  },
  {
    title: 'Components',
    directory: 'components',
    children: [
      {
        title: 'Inputs',
        directory: 'components/inputs',
      },
      {
        title: 'Content',
        directory: 'components/content',
      },
      {
        title: 'Options',
        directory: 'components/options',
      },
      {
        title: 'Alerts / Info',
        directory: 'components/alerts',
      },
      {
        title: 'Navigation',
        directory: 'components/navigation',
      },
      {
        title: 'Progress',
        directory: 'components/progress',
      },
      {
        title: 'Overlays',
        directory: 'components/overlays',
      },
      {
        title: 'Context',
        directory: 'components/context',
      },
      {
        title: 'Dynamic Forms',
        directory: 'components/dynamicForms',
      },
      {
        title: 'Internal Components',
        directory: 'components/internal',
      },
    ],
    searchable: true,
  },
  {
    title: 'Devs',
    directory: 'devs',
    hidden: true,
  },
  {
    title: 'Lab',
    directory: 'lab',
  },
  {
    title: 'Blog',
    directory: 'blog',
    fileOrder: ['Home'],
    sidebar: false,
  },
];

export default sections;
