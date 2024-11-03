import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Error({ children }: Props) {
  return <span className='text-red-500'>{children}</span>;
}
