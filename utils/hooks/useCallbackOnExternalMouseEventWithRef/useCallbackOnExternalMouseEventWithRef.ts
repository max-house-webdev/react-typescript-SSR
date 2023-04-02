import { useRef, useEffect } from 'react';

type TMouseEvent = 'click' | 'dblclick';

function useCallbackOnExternalMouseEventWithRef(mouseEvent: TMouseEvent) {
  return function (callback: () => void) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handle = (event: MouseEvent) => {
        if (
          event.target instanceof Node &&
          !ref.current?.contains(event.target)
        ) {
          callback();
        }
      };

      document.addEventListener(mouseEvent, handle);

      return () => {
        document.removeEventListener(mouseEvent, handle);
      };
    }, [callback]);

    return [ref];
  };
}

export const useCallbackOnExternalClickWithRef =
  useCallbackOnExternalMouseEventWithRef('click');

export const useCallbackOnExternalDblClickWithRef =
  useCallbackOnExternalMouseEventWithRef('dblclick');
