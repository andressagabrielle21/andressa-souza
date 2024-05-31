import PageContent from '@/components/PageContent'
import { motion } from 'framer-motion';
import actions from '@/components/actions';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const data = actions();

  return (
    <PageContent> 
      <div className='m-[2rem] md:my-[3rem] md:mx-[6rem]'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", duration: .5 }}>
          <h1 className='text-white font-bold [text-shadow:_0_10px_18px_rgb(0_0_0_/_38%)] text-[2.5em] text-center md:text-left'>Projects</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, 50, 0] }} transition={{ ease: "easeIn", duration: .9 }}>
          <div className='sm:grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8'>
            {data.map((item) => (
              <ProjectCard
                title={item.repoName}
                projectInfo={item.description}
                repLink= {item.cloneUrl}
                buttonName='GitHub Repository'
                imgLink={item.coverImgUrl}
                deployedWebsite={item.deployed}
              />
            ))}

          </div>
        </motion.div>

      </div>


    </PageContent>
  )
}

export default Projects