import { useState, useEffect, ComponentType } from 'react';
import { createPortal } from 'react-dom';

export default function withNextPortalWrapper<T>(Component: ComponentType<T>) {
  return function (props: T) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, [setMounted]);

    return mounted ? createPortal(<Component {...props} />, document.body) : null;
  };
}
