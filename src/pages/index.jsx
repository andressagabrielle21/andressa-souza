import Image from 'next/image'
import Profile from '../assets/img/profile.png';
import PageContent from '@/components/PageContent';

const Home = () => {
  const fetchGit = async() => {
    const response = await fetch ("https://api.github.com/users/andressagabrielle21/repos?sort=updated&direction=desc") 
  
    const data = await response.json();
  
    console.log(data)
  }

  fetchGit()
  return (
    <PageContent >
      <div className='min-h-[80vh] md:max-h-[90vh] flex flex-col m-[2rem] md:my-[3rem] md:mx-[4rem] md:flex-row items-center justify-around'>
        <div className="leading-[4rem] text-center md:text-left animate-animateFromTop">
            <h2 className='text-[1.5em] font-bold'>Hello!</h2>

            <h1 className='text-[2.2em] font-bold'>My name is <span className='text-white'>Andressa!</span> </h1>
            <h1 className='text-[1.5em] md:text-[2em] font-bold'>I'm a <span className='text-white'>Frontend Developer.</span> </h1>
        </div>
        <Image className='animate-animateFromTop'
          src={Profile}
          alt='Andressa greetings'
        />
      </div>
    </PageContent>
  )
}

export default Home