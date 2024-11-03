import Button from '@/components/button/button';
import Image from 'next/image';

export default function Poster() {
  return (
    <div className='space-y-section flex flex-col justify-center items-center relative'>
      <h1>Less important title</h1>
      <Button href='CONTACT' type='button' size='full'>
        Contact us
      </Button>
      <Image
        src='/arrow.svg'
        alt='arrow'
        width='70'
        height='0'
        className='absolute left-0 top-0 m-0 hidden md:block'
      />
    </div>
  );
}
