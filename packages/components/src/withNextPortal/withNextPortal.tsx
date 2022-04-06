import { useState, useEffect, ComponentType } from 'react';
import { createPortal } from 'react-dom';

import { useTheme } from '../common/hooks';

export default function withNextPortalWrapper<T>(Component: ComponentType<T>) {
  return function (props: T) {
    const portalContainer = document.body;

    const [mounted, setMounted] = useState(false);
    const theme = useTheme();

    portalContainer.classList.remove('np-theme-light', 'np-theme-navy', 'np-theme-dark');
    portalContainer.classList.add(`np-theme-${theme}`);

    useEffect(() => {
      setMounted(true);
    }, [setMounted]);

    return mounted ? createPortal(<Component {...props} />, portalContainer) : null;
  };
}
