import React from 'react';

import styles from './Main.scss';

import { Container } from '../../../../utils/components';

import { Wait } from '../../../assets/img';

export function Main() {
  return (
    <Container As={'main'} className={styles.main}>
      <h1>Main</h1>
      <p className={styles.p}>
        This is React SSR app
        <img
          src={Wait}
          alt='/static/c694588fe9e335fe3473.png'
          className={styles.image}
        />
      </p>
    </Container>
  );
}
