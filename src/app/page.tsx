import Banner from './components/banner/banner';
import Category from './components/aspects/aspects';
import Poster from './components/poster/poster';

export default function Home() {
  return (
    <main className='space-y-big-section'>
      <Banner />
      <Category />
      <Poster />
    </main>
  );
}
