import Button from '@/components/button/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='py-4 flex justify-between items-center mb-20 lg:mb-40 xl:mb-60'>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' height='45' width='45' />
      </Link>
      <Button size='L' color='primary' href='CONTACT'>
        Contact us
      </Button>
    </header>
  );
}
