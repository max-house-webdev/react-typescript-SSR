import { useEffect } from 'react';

import store from '../../store';

import { set } from './processEnvSlice';

export function useProcessEnv(callback: () => void) {
  useEffect(() => {
    store.dispatch(set());

    callback();
  }, [callback]);
}
