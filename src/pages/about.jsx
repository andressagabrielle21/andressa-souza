import PageContent from '@/components/PageContent';
import Button from '../components/Button';

const About = () => {
  return (
    <PageContent>
        <div className="flex flex-col md:flex-row my-[3em] md:my-0 md:p-0 text-center md:text-left items-center justify-around min-h-[90vh] mx-[3rem]">

            <div className='md:max-w-[40%] animate-animateFromTop mb-[1.8rem] md:mb-0'>
                <h2 className='text-[40px] font-bold mb-[2rem]'>My name is <br className='md:hidden' /><span className='text-white break-normal'>Andressa Souza!</span></h2>

                <p className='leading-[25px] mb-[2rem] text-[20px] font-semibold break-normal'>I’m a Full Stack Developer from Brazil, focused on the solution of problems and in the best experience for the users.</p>

                <p className='hidden md:block font-semibold leading-[25px] mb-[2rem] text-[20px] break-normal'>I love working with Web Development, designing and developing accessible and user-friendly websites. My goal is to make the difference with those projects.</p>
                
                <div className='md:w-2/4'>
                    <Button buttonName="Checkout my resumé" link={'https://drive.google.com/file/d/1ethjkfOdWDR98DJoHmleqHgWbxMtshrQ/view?usp=sharing'} />
                </div>
            </div>


            <div className="text-[16px] md:w-[28vw] animate-animateFromTop">
                <h2 className='text-[40px] mb-[.5rem] md:mb-[2rem] font-bold'>My main <span className='text-white'>skills:</span> </h2>

                <ul className='text-[20px] font-bold leading-[1.8em] text-gray-'>
                    <li>TypeScript & JavaScript</li>
                    <li>Java and Springboot (OOP) </li>
                    <li>React and Next.js</li>
                    <li>Python and Django</li>
                    <li>Redux & Redux Toolkit</li>
                    <li>Tailwind CSS and Styled Components</li>
                    <li>Git and GitFlow</li>
                    <li>SCRUM and Agile Culture</li>
                    <li>DevOps Fundamentals</li>
                </ul>   
            </div>
        </div>
    </PageContent>
  )
}

export default About
