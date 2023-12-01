import PageContent from '@/components/PageContent';
import Project from '../components/Project';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const Projects = () => {
  return (
    <PageContent> 
      <div className='m-[2rem] md:my-[3rem] md:mx-[6rem]'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: .5 }}>
          <h1 className='text-white font-bold [text-shadow:_0_10px_18px_rgb(0_0_0_/_38%)] text-[2.5em] text-center md:text-left'>Projects</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: 1 }}>
          <Project
            title="Anime Vault"
            projectInfo="A web app consuming API library of animes built with TypeScript, Framer Motion and Nextjs 14."
            buttonName='Deployed Website'
            imgLink='https://github.com/andressagabrielle21/anime-vault/assets/25774210/87e71baa-453a-47b4-8e5a-c49a03341d05'
            repLink='https://anime-vault-explore.vercel.app/'
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: 1 }}>
          <Project
            title="What's on cinemas?"
            projectInfo="A React aplication consuming TMDB API showing movies and its informations playing on cinemas right now. This project used the Styled Components and the React Router DOM libraries."
            buttonName='GitHub Repository'
            imgLink='https://user-images.githubusercontent.com/25774210/160446288-8ac8a19b-8b61-44b9-82bf-e75250f96666.png'
            repLink='https://github.com/andressagabrielle21/now-playing-movies'
          />
        </motion.div>


        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: 1 }} >
          <Project
            title="URL Shortify"
            projectInfo="Developed with Python, Django Framework, JavaScript, HTML and CSS (SCSS/SASS)"
            buttonName='GitHub Repository'
            imgLink='https://user-images.githubusercontent.com/25774210/160290228-dc6ba95e-e9c4-455e-bb76-dd986ebe268f.png'
            repLink='https://github.com/andressagabrielle21/shortify-urls'
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: 1 }}>
          <Project
            title="Arnaldo's Client List"
            projectInfo="A CRUD App developed with React, Firebase/Firestore and Styled Components."
            buttonName='GitHub Repository'
            imgLink='https://user-images.githubusercontent.com/25774210/163079801-7378fc40-80e4-43a7-bb0a-184b24077ed2.png'
            repLink='https://github.com/andressagabrielle21/arnaldos-contact-list'
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: 1 }}>
          <Project
            title="Genius Game"
            projectInfo="Test your memory with this classic game. Project developed with HTML, CSS, JavaScript and jQuery."
            buttonName='GitHub Repository'
            imgLink='https://user-images.githubusercontent.com/25774210/168482166-d92ea52f-2930-4d5b-8a91-cfa9b5eef2bf.png'
            repLink='https://github.com/andressagabrielle21/genius-game'
          />
        </motion.div>

      </div>
    </PageContent>
  )
}

export default Projects