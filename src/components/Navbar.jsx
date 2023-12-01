import React from 'react'
import Link from 'next/link';
// import Hamburger from '../assets/img/hamburger.svg';

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <> 
        <div className='bg-blue-500 bg-opacity-30 text-white p-[.8rem] shadow-lg'>
            <div className="flex items-center justify-between">
                <h2 className='font-navbar text-[27px] hidden md:block'>Andressa Souza</h2>

                {/* Hamburg Navbar NOT IMPLEMENTED*/}
                {/* <div className="md:hidden block navbar-brand"> */}
                <div className='hidden'>
                  {/* <img src={Hamburger} alt="" width={25} height={25}/> */}
                </div>

                {/* <div className={`navbar-menu ${isOpen ? 'is-active' : ''} hidden`}>
                  <div className="navbar-start">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                  </div>
                </div> */}
                {/* Hamburg Navbar */}

                <div className='w-screen md:max-w-[25%] text-lg flex justify-around items-center'>
                    <Link className='hover:font-bold' href='/'>Home</Link>
                    <Link className='hover:font-bold' href='/about'>About</Link>
                    <Link className='hover:font-bold' href='/projects'>Projects</Link>
                    <Link className='hover:font-bold' href='/contact'>Contact</Link>
                </div>
            </div>
            
        </div>
    </>
  )
}
