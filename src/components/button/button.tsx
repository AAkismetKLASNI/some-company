import { ROUTES } from '@/routes';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { SIZES } from './button.sizes';
import { COLORS } from './button.colors';
import Link from 'next/link';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: keyof typeof SIZES;
  href?: keyof typeof ROUTES;
  color?: keyof typeof COLORS;
}

export default function Button({
  children,
  href,
  size = 'M',
  color = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={`select-none hover:bg-dark transition-all ${SIZES[size]}`}
      {...props}
    >
      {href ? (
        <Link
          className={`flex justify-center items-center h-full w-full ${COLORS[color]}`}
          href={ROUTES[href]}
        >
          {children}
        </Link>
      ) : (
        <span className={`${COLORS[color]}`}>{children}</span>
      )}
    </button>
  );
}
