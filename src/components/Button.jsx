import Link from 'next/link';

const Button = ({link, buttonName}) => {
  return (
    <Link href={link} target="_blank">
      <div className='w-fill py-[.8rem] text-center px-[3rem] bg-blue-400 rounded-lg text-white font-[17px] shadow-lg font-bold hover:shadow-xl hover:scale-90 animate-animateFromTop'>
        {buttonName}
      </div>
    </Link>
  )
}

export default Button
