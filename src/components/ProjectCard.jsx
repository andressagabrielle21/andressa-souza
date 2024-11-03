import { useEffect, useState } from "react";
import Image from 'next/image';
import Button from './Button'
import NotFound from '../assets/images/not-found.png';

export default function ProjectCard({ title, projectInfo, buttonName, imgLink, repLink, deployedWebsite }) {

  const [isValidLink, setIsValidLink] = useState(true);
  const linkImgUrl = `https://raw.githubusercontent.com/andressagabrielle21/${title}/main/src/assets/images/coverImage.png`

  const checkLinkStatus = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    const validateLink = async () => {
      const isValid = await checkLinkStatus(linkImgUrl);
      setIsValidLink(isValid);
    };

    validateLink();
  }, [linkImgUrl]);

  return (
    <div className='bg-slate-100/50 flex flex-col-reverse align-center justify-between rounded-lg my-[2rem] py-[1.5rem] px-[2rem]'>
      <div className='md:flex md:flex-col md:justify-around '>
        <h2 className='text-[1.5em] font-bold mb-[1.5rem] max-md:text-center'>{title}</h2>

        <p className='text-lg leading-[1.3em] mb-[1.5em]'>{projectInfo}</p>

        <div className='flex flex-col gap-6'>
          <Button link={repLink} buttonName={buttonName} />

          <div className='gap-10'>
            {deployedWebsite && <Button link={deployedWebsite} buttonName="Deployed Website" />}
          </div>
        </div>


      </div>
      <div>
        {isValidLink ?
          <img src={imgLink} className='w-[26em] mb-[1rem] md:mb-0 h-[14em] rounded-lg border-2 ' alt="Project Screenshot" /> :
            <Image className='animate-animateFromTop'
            src={NotFound}
            alt="Project Screenshot Not Found"
          />
        }
      </div>
    </div>

  )
}
