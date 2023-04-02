import React from 'react';

import styles from './Spinner.scss';

export function Spinner() {
  return (
    <svg className={styles.Spinner} viewBox='0 0 50 50'>
      <circle
        className={styles.path}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      ></circle>
    </svg>
  );
}
