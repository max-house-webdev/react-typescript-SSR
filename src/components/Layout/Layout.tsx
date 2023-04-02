import React from 'react';
import { Provider } from 'react-redux';

import styles from './Layout.scss';

import store from '../../store';

import { Header, Main } from '../../components';

export function Layout() {
  return (
    <Provider store={store}>
      <div className={styles.layout}>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}
