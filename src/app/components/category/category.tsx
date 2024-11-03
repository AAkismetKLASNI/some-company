import Button from '@/components/button/button';
import Card from '@/components/card/card';

export default function Category() {
  return (
    <div className='space-y-section'>
      <h1 className='text-center'>Also very important title</h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </Card>
      </div>
      <Button color='primary' href='CONTACT' size='full'>
        Contact us
      </Button>
    </div>
  );
}
