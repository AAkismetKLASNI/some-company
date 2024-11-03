import Banner from './components/banner/banner';
import Category from './components/category/category';
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
