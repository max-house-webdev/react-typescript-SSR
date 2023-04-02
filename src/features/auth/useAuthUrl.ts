import { useState } from 'react';

interface IUseAuthProps {
  initialAuthUrl: string;
}

export function useAuthUrl(props: IUseAuthProps) {
  const { initialAuthUrl } = props;

  return useState(initialAuthUrl);
}
