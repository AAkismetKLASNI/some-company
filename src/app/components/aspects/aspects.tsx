import Button from '@/components/button/button';
import Card from '@/components/card/card';

export default function Aspects() {
  return (
    <div className='space-y-section'>
      <h1 className='text-center'>Aspects</h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Card>
          <h2>Creating Unique Ideas 🧡</h2>
          <p>
            We help you formulate a project concept that aligns with your
            business goals and engages your target audience
          </p>
        </Card>
        <Card>
          <h2>Words That Inspire 🥇</h2>
          <p>
            We craft compelling narratives that resonate with your audience and
            bring your vision to life
          </p>
        </Card>
        <Card>
          <h2>Bringing Your Ideas to Life 🔥</h2>
          <p>
            During production, we utilize cutting-edge equipment and enlist top
            industry professionals
          </p>
        </Card>
        <Card>
          <h2>Final Touches of Mastery 🌈</h2>
          <p>
            We craft compelling narratives that resonate with your audience and
            bring your vision to life
          </p>
        </Card>
        <Card>
          <h2>A World Without Boundaries 🌍</h2>
          <p>
            Breaking barriers in creativity, we deliver innovative solutions
            tailored to your unique needs
          </p>
        </Card>
        <Card>
          <h2>Sharing Knowledge 🧠</h2>
          <p>
            Empowering you with industry insights and expertise to elevate your
            projects to new heights
          </p>
        </Card>
      </div>
      <Button color='primary' href='CONTACT' size='full'>
        Contact us
      </Button>
    </div>
  );
}
