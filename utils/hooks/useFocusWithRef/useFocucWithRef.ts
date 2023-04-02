import { useRef, useEffect } from 'react';

export function useFocusWithRef<
  T extends HTMLElement
>(): React.MutableRefObject<T> {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  return ref as T;
}
