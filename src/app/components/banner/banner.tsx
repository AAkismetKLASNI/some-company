'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1.2fr,_1fr] justify-between gap-4'>
      <div className='space-y-section text-center flex flex-col md:text-left lg:w-4/6'>
        <h1>Production Studio – From Idea to Realization</h1>
        <span>
          Production services ensure that every project is crafted with
          precision and care. Let us help you tell your story in a way that
          captivates and inspires your audience.
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
