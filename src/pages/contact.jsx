import Image from 'next/image';
import ContactMe from '../assets/images/contact-me.png';
import Linkedin from '../assets/images/linkedin.png';
import Github from '../assets/images/github.png';
import Instagram from '../assets/images/instagram.png';
import PageContent from '@/components/PageContent';

const Contact = () => {
  return (
    <PageContent>
      <div className='min-h-[80vh] md:max-h-[90vh] m-[2rem] md:my-[3rem] md:mx-[4rem] flex flex-col md:flex-row items-center justify-around animate-animateFromTop'>
        <Image className='animate-animateFromTop'
          src={ContactMe}
          alt='Andressa greetings'
        />

        <div className="text-center leading-[5rem]">
          <h1 className='text-white font-bold text-[2.2em] md:text-[2.8em] [text-shadow:_0_10px_18px_rgb(0_0_0_/_38%)]'>Keep in touch!</h1>

          <div className='text-[1.2em] md:text-[1.3em]'> 
            <span className='font-bold'>E-mail:</span> <a href="mailto:andressagss21@gmail.com">andressagss21@gmail.com</a> 
          </div>

          <h2 className='text-white font-bold text-[1.5em] md:text-[1.8em]'>Check out my socials</h2>
          <div className="flex justify-between mx-[1.5rem] md:mx-0">
            <a className='hover:scale-90' href="https://www.linkedin.com/in/andressa-souza-611857138/">
              <Image className='animate-animateFromTop'
                src={Linkedin}
                alt='Linkedin icon'
                target="_blank"
              />
            </a>
            <a className='hover:scale-90' href="https://github.com/andressagabrielle21">
              <Image className='animate-animateFromTop'
                src={Github}
                alt="Github icon"
                target="_blank"
              />
            </a>
            <a className='hover:scale-90' href="https://www.instagram.com/andressagabriele/">
              <Image className='animate-animateFromTop'
                src={Instagram}
                alt="Instagram icon"
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
    </PageContent>
  )
}

export default Contact
