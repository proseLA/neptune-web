import {
  NavigationOption,
  SwitchOption,
  Avatar,
  Button,
  Checkbox,
  Radio,
  Priority,
} from '@transferwise/components';
import { Profile } from '@transferwise/icons';

import Heading from '../../../components/Heading';

export default function DisabledState() {
  return (
    <>
      <p>
        We use opacity (<b>45%</b>) and luminosity blend mode (<b>luminosity</b>) in components and
        styles to represent disabled state.
      </p>
      <p>
        Use either <code>disabled</code> HTML attribe or <code>.disabled</code> CSS class in your
        custom components / UI.
      </p>
      <Heading as="h3">Demo</Heading>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="form-group">
            <p className="disabled">Example of form with disabled items / controls:</p>
            <div className="form-group">
              <label htmlFor="test" className="control-label disabled">
                Label
              </label>
              <input id="test" type="text" disabled className="form-control" />
            </div>
            <NavigationOption
              disabled
              media={<Profile />}
              title="Personal account"
              content="Send, spend, and receive around the world for less."
            />
            <SwitchOption
              aria-label="Personal account"
              disabled
              media={<Avatar>AA</Avatar>}
              title="Personal account"
              checked
              content="Send, spend, and receive around the world for less."
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onChange={() => {}}
            />
            <Button block disabled>
              Submit
            </Button>
            <Button block disabled priority={Priority.SECONDARY}>
              Cancel
            </Button>
            <Radio
              checked
              className="m-t-1"
              label="A radio button"
              name="demo"
              disabled
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onChange={() => {}}
            />
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <Checkbox label="A checkbox" className="m-t-1" checked disabled onChange={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

export const meta = {
  name: 'Disabled State',
  badge: {
    expiryDate: '2022-02-19',
    type: 'new',
  },
};
