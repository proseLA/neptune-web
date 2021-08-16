import { MouseEvent, ReactChild, ReactElement } from 'react';

import Option from '../common/Option';
import Switch from '../switch';

type Props = {
  checked?: boolean;
  complex?: boolean;
  content?: ReactChild;
  disabled?: boolean;
  showMediaAtAllSizes?: boolean;
  id?: string;
  media?: ReactChild;
  onChange: (newValue: boolean) => void;
  title: ReactChild;
  'aria-label': string;
};

const stopPropagation = (event?: MouseEvent<HTMLSpanElement>) => {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
      event.nativeEvent.stopImmediatePropagation();
    }
  }
};

const SwitchOption = ({
  checked,
  complex,
  content,
  disabled,
  id,
  media,
  onChange,
  title,
  showMediaAtAllSizes,
  'aria-label': ariaLabel,
}: Props): ReactElement => {
  const sharedProps = { media, title, content, complex, disabled, showMediaAtAllSizes };
  const toggle = (event?: MouseEvent<HTMLSpanElement>) => {
    stopPropagation(event);
    if (disabled) {
      return;
    }

    onChange(!checked);
  };

  return (
    <Option
      {...sharedProps}
      button={
        <Switch
          id={id}
          checked={checked}
          disabled={disabled}
          aria-label={ariaLabel}
          onClick={toggle}
        />
      }
      onClick={toggle}
    />
  );
};

export default SwitchOption;
