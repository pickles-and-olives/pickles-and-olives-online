import DefaultLayout from '../components/DefaultLayout';
import kitten from '../assets/kitten.png';
import { Link } from 'react-router-dom';
import Resume from '../../src/Melissa MCFADZIEN_May_23.pdf';

export default function AboutPage() {
  return (
    <DefaultLayout colour={'#CC7774'}>
      <div className='flex w-full flex-col text-center'>
        <h1 className='p-4'>about</h1>
        <div className='mx-auto w-2/3'>
          <h3 className='p-4 text-2xl'>the name</h3>
          <p className='mx-auto'>
            The name of this page is inspired by a rashly chosen GitHub username;
            pickles-and-olives, which in turn was inspired by my two cat's very thoughtfully chosen
            names; Pickle and Olive.
          </p>
        </div>
        <div className='mx-auto w-2/3'>
          <h3 className='p-4 text-2xl'>the namesakes</h3>
          <p className='mx-auto w-4/5'>
            Pickle and Olive are a brother and sister who originated in my parent's garage, care of
            a clever and feisty stray mama cat. They are not very good at writing code.
          </p>
          <img src={kitten} className='mx-auto w-1/2' />
        </div>
        <div className='mx-auto w-2/3'>
          <h3 className='p-4 text-2xl'>me</h3>
          <p className='mx-auto w-4/5 p-2'>
            As previously mentioned, I'm Melissa. I studied a Bachelor of Design at Auckland
            University of Technology as an undergraduate, and proceeded to travel and work across
            Auckland, NZ and New York, USA. Working in a variety of roles within the fashion retail
            industry, I accidentally started to write a very small amount of code to facilitate my
            position at the time as a digital content designer.
          </p>
          <p className='mx-auto w-4/5 p-2'>
            It was love at first &lt;div&gt; and soon after I decided to study a Master of
            Information Technology at the University of Auckland, which I am currently in the midst
            of.
          </p>
        </div>
        <h3 className='p-4 text-2xl'>links etc.</h3>
        <ul>
          <a href={Resume}>
            <li> my resume</li>
          </a>
          <a href='https://github.com/pickles-and-olives'>
            <li>GitHub</li>
          </a>
          <a href='https://www.linkedin.com/in/melissa-m-99512414b/'>
            <li>LinkedIn</li>
          </a>
        </ul>
        <h3 className='p-4 text-2xl'>contact</h3>
        <p>email: melissa.mcfadzien@gmail.com</p>
        <p>UOA email: mmcf647@aucklanduni.ac.nz</p>
      </div>
    </DefaultLayout>
  );
}
