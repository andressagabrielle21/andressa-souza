import React from 'react'
import Button from './Button'

export default function ProjectCard({ title, projectInfo, buttonName, imgLink, repLink, deployedWebsite }) {

  return (
    <div className='bg-slate-100/50 flex flex-col-reverse md:flex-row align-center justify-between rounded-lg my-[2rem] py-[1.5rem] px-[2rem]'>
      <div className='md:flex md:flex-col md:justify-around md:w-[60%]'>
        <h2 className='text-[1.5em] font-bold mb-[1.5rem] max-md:text-center'>{title}</h2>

        <p className='text-lg md:w-[70%] leading-[1.3em] mb-[1.5em]'>{projectInfo}</p>

        <div className='flex flex-col gap-6 md:gap-8 md:flex-row'>
          <Button link={repLink} buttonName={buttonName} />

          <div className='gap-10'>
            {deployedWebsite && <Button link={deployedWebsite} buttonName="Deployed Website" />}
          </div>
        </div>


      </div>
      <div>
        <img src={imgLink} className='w-[26em] mb-[1rem] md:mb-0 h-[14em] rounded-lg border-2 ' alt="Project Screenshot" />
      </div>
    </div>

  )
}
