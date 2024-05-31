import PageContent from '@/components/PageContent';
import Button from '../components/Button';

const About = () => {
  return (
    <PageContent>
        <div className="flex flex-col md:flex-row my-[3em] md:my-0 md:p-0 text-center md:text-left items-center justify-around min-h-[90vh] mx-[3rem]">

            <div className='md:max-w-[40%] animate-animateFromTop mb-[1.8rem] md:mb-0'>
                <h2 className='text-[30px] font-bold mb-[2rem]'>My name is <br className='md:hidden' /><span className='text-white break-normal'>Andressa Souza!</span></h2>

                <p className='leading-[25px] mb-[1.5rem] text-[18px] break-normal'>I’m a Frontend Developer from Brazil, focused on the solution of problems and in the best experience for the users.</p>

                <p className='hidden md:block leading-[25px] mb-[2rem] text-[18px] break-normal'>I love working with Web Development, designing and developing accessible and user-friendly websites. My goal is to make the difference with those projects.</p>
                
                <div className='md:w-2/4'>
                    <Button buttonName="Checkout my resumé" link={'https://drive.google.com/file/d/1ly609bZ2idwQPJ7fOBJVRmedQN9C4HgK/view?usp=sharing'} />
                </div>
            </div>


            <div className="text-[16px] md:w-[28vw] animate-animateFromTop">
                <h2 className='text-[30px] mb-[.5rem] md:mb-[2rem] font-bold'>My main <span className='text-white'>skills:</span> </h2>

                <ul className='leading-[1.8em] text-[18px]'>
                    <li>HTML and CSS (SCSS/SASS)</li>
                    <li>TypeScript & JavaScript</li>
                    <li>React and Next.js</li>
                    <li>Python and Django</li>
                    <li> Java and Springboot (OOP) </li>
                    <li>Redux & Redux Toolkit</li>
                    <li>Tailwind CSS and Styled Components</li>
                    <li>Git and GitFlow</li>
                    <li>SCRUM and Agile Culture</li>
                    <li>Fundamentals of UX/UI Design</li>
                </ul>   
            </div>
        </div>
    </PageContent>
  )
}

export default About
