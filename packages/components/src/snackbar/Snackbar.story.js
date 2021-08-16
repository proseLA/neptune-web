import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import Button from '../button';
import { Theme } from '../common/theme';

import { Snackbar } from './Snackbar';
import { SnackbarConsumer } from './SnackbarContext';
import SnackbarProvider from './SnackbarProvider';

export default {
  component: Snackbar,
  title: 'Snackbar',
};

export const Basic = () => {
  const theme = select('Theme', [Theme.LIGHT, Theme.DARK], Theme.LIGHT);

  return (
    <SnackbarProvider>
      <SnackbarConsumer>
        {({ createSnackbar }) => (
          <Button
            block
            onClick={() =>
              createSnackbar({
                action: {
                  label: 'Bite me',
                  onClick: () => action("I can't believe you've done this."),
                },
                text: <span>Some text</span>,
                theme,
              })
            }
          >
            Show
          </Button>
        )}
      </SnackbarConsumer>
    </SnackbarProvider>
  );
};
