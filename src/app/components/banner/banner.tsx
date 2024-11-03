'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
      <div className='space-y-section text-center flex flex-col md:text-left lg:w-4/6'>
        <h1>Most important title on the page</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </span>
      </div>
      <LiteYouTubeEmbed
        aspectHeight={9}
        aspectWidth={16}
        id='dQw4w9WgXcQ'
        title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
      />
    </div>
  );
}
