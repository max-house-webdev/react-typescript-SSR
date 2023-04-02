import React from 'react';

import styles from './Error.scss';

export interface IErrorProps {
  errorMessage?: string;
}

export function Error(props: IErrorProps) {
  const { errorMessage } = props;

  const defaultMessage = 'An unexpected error has occurred';

  if (!errorMessage) {
    return <h4 className={styles.Error}>{defaultMessage}</h4>;
  }

  return <h4 className={styles.Error}>{errorMessage}</h4>;
}
