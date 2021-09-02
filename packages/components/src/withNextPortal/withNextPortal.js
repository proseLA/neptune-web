import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function withNextPortalWrapper(Component) {
  return function (props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, [setMounted]);

    return mounted ? createPortal(<Component {...props} />, document.body) : null;
  };
}
