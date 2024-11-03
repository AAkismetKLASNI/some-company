import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className='flex flex-col gap-10 cursor-pointer text-center bg-dark py-4 px-6 rounded-lg transition-transform hover:scale-105'>
      {children}
    </div>
  );
}
