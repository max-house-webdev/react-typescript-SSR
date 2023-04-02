import React from 'react';

import styles from './Header.scss';

import { DiAtom } from 'react-icons/di';

import { Container } from '../../../../utils/components';

export function Header() {
  return (
    <Container As={'header'} className={styles.header}>
      <h3> Header</h3>
      <DiAtom fill='crimson' />
    </Container>
  );
}
