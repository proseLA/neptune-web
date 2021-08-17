import Transition from 'react-transition-group/Transition';

import { render, screen, userEvent } from '../test-utils';

import Select from '.';

jest.mock('react-transition-group/Transition', () => jest.fn('placeholder'));

describe('Select', () => {
  const props = {
    onChange: jest.fn(),
    options: [
      { value: 0, label: 'yo' },
      { value: 1, label: 'dawg' },
      { value: 2, label: 'boi' },
    ],
  };

  beforeEach(() => {
    // Need to reset innerWidth for portal tests
    window.innerWidth = 1024;
    window.matchMedia = () => {
      return { matches: false };
    };

    Transition.mockImplementation((properties) => {
      const ActualTransition = jest.requireActual('react-transition-group/Transition').default;
      return <ActualTransition {...properties} timeout={0} />;
    });
    jest.clearAllMocks();
  });

  const bustStackAndUpdate = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  };

  const openSelect = (container) => {
    const button = container.querySelector('button');
    userEvent.click(button);
  };

  describe('search property', () => {
    it('should focus input when dropdown is open', async () => {
      const { container } = render(<Select {...props} search />);

      openSelect(container);
      await bustStackAndUpdate();
      const input = screen.getByPlaceholderText('Search...');

      expect(input).toHaveFocus();
    });

    it('should filter the options with the default filter function', async () => {
      const { container } = render(<Select {...props} search />);

      openSelect(container);
      await bustStackAndUpdate();
      const input = screen.getByPlaceholderText('Search...');
      userEvent.type(input, 'yo');

      // Not ideal, this higlights accessibility issues.
      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toStrictEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(screen.getByText('yo')).toBeInTheDocument();
    });

    describe('when options contain searchables', () => {
      let input;

      const searchableOptions = [
        {
          value: 0,
          label: 'first_label',
          note: 'first_note',
          secondary: 'first_secondary',
          currency: 'gbp',
          searchStrings: ['first_search_string'],
        },
        {
          value: 1,
          label: 'second_label',
          note: 'second_note',
          secondary: 'second_secondary',
          currency: 'usd',
          searchStrings: ['second_search_string'],
        },
        {
          value: 2,
          label: 'third_label',
          note: 'third_note',
          secondary: 'third_secondary',
          currency: 'eur',
          searchStrings: ['third_search_string'],
        },
      ];

      beforeEach(async () => {
        const { container } = render(<Select {...props} options={searchableOptions} search />);

        openSelect(container);
        await bustStackAndUpdate();

        input = screen.getByPlaceholderText('Search...');
      });

      describe('when searching by label', () => {
        it('should display the search result', () => {
          userEvent.type(input, 'second_label');

          expect(screen.queryByText('first_label')).not.toBeInTheDocument();
          expect(screen.getByText('second_label')).toBeInTheDocument();
          expect(screen.queryByText('third_label')).not.toBeInTheDocument();
        });
      });

      describe('when searching by note', () => {
        it('should display the search result', () => {
          userEvent.type(input, 'third_note');

          expect(screen.queryByText('first_label')).not.toBeInTheDocument();
          expect(screen.queryByText('second_label')).not.toBeInTheDocument();
          expect(screen.getByText('third_label')).toBeInTheDocument();
        });
      });

      describe('when searching by secondary', () => {
        it('should display the search result', () => {
          userEvent.type(input, 'first_secondary');

          expect(screen.getByText('first_label')).toBeInTheDocument();
          expect(screen.queryByText('second_label')).not.toBeInTheDocument();
          expect(screen.queryByText('third_label')).not.toBeInTheDocument();
        });
      });

      describe('when searching by currency', () => {
        it('should display the search result', () => {
          userEvent.type(input, 'usd');

          expect(screen.queryByText('first_label')).not.toBeInTheDocument();
          expect(screen.getByText('second_label')).toBeInTheDocument();
          expect(screen.queryByText('third_label')).not.toBeInTheDocument();
        });
      });

      describe('when searching by searchStrings', () => {
        it('should display the search result', () => {
          userEvent.type(input, 'third_search_string');

          expect(screen.queryByText('first_label')).not.toBeInTheDocument();
          expect(screen.queryByText('second_label')).not.toBeInTheDocument();
          expect(screen.getByText('third_label')).toBeInTheDocument();
        });
      });
    });

    it('should filter the options with the default filter function in their currency attributum', async () => {
      const { container } = render(
        <Select
          {...props}
          search
          options={[
            { value: 0, label: 'Hungarian forint', currency: 'HUF' },
            { value: 1, label: 'British pound', currency: 'GBP' },
          ]}
        />,
      );

      openSelect(container);
      await bustStackAndUpdate();
      const input = screen.getByPlaceholderText('Search...');
      userEvent.type(input, 'HUF');

      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toStrictEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(screen.getByText('Hungarian forint').parentElement.parentElement).toHaveClass(
        'tw-dropdown-item tw-dropdown-item--clickable tw-dropdown-item--focused',
      );
    });

    it('should include searchable strings in option search if present', async () => {
      const { container } = render(
        <Select
          {...props}
          search
          options={[
            { value: 0, label: 'Estonia', searchStrings: ['EE', 'Tallinn'] },
            { value: 1, label: 'United States of America', searchStrings: ['US', 'USA', 'DC'] },
          ]}
        />,
      );

      openSelect(container);
      await bustStackAndUpdate();
      const input = screen.getByPlaceholderText('Search...');
      userEvent.type(input, 'Tallinn');

      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toStrictEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(screen.getByText('Estonia').parentElement.parentElement).toHaveClass(
        'tw-dropdown-item tw-dropdown-item--clickable tw-dropdown-item--focused',
      );
    });

    it('should filter the options with a custom search function', async () => {
      const searchFunction = jest.fn();
      const { container } = render(<Select {...props} search={searchFunction} />);
      openSelect(container);
      await bustStackAndUpdate();
      const input = screen.getByPlaceholderText('Search...');
      userEvent.type(input, 'o');

      expect(searchFunction).toHaveBeenCalledTimes(6);
    });

    it('should filter the options with a custom search function with 3 results', async () => {
      const searchFunction = jest.fn();
      searchFunction.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true);
      const { container } = render(<Select {...props} search={searchFunction} />);
      openSelect(container);
      await bustStackAndUpdate();

      const input = screen.getByPlaceholderText('Search...');
      userEvent.type(input, 'o');

      expect(screen.getByRole('list').children).toHaveLength(3);
    });
  });

  it("on touch device doesn't focus on the search box once opened", async () => {
    window.matchMedia = () => {
      return { matches: true };
    };
    const { container } = render(<Select {...props} onSearchChange={jest.fn()} />);

    openSelect(container);
    await bustStackAndUpdate();
    const input = screen.getByPlaceholderText('Search...');

    expect(input).not.toHaveFocus();
  });

  it('on not touch device focuses on the search box once opened', async () => {
    const { container } = render(<Select {...props} search onSearchChange={jest.fn()} />);

    openSelect(container);
    await bustStackAndUpdate();
    const input = screen.getByPlaceholderText('Search...');

    expect(input).toHaveFocus();
  });
});
