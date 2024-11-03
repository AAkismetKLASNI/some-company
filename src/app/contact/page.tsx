import { Metadata } from 'next';
import Form from './components/form/form';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'it is contact us',
  robots: { follow: false, index: false },
};

export default function Contact() {
  return (
    <main className='flex justify-center items-center'>
      <Form />
    </main>
  );
}
