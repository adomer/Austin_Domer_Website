import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import Tippy from '@tippyjs/react'
import '../tippy-tooltip/tippyTooltip.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/animations/scale.css'

const ProjectsTiles = ({
  img,
  project_url,
  github_url,
  projectDescription,
  projectName,
}) => {
  return (
    <div className="bg-chosen-cream dark:bg-[#D5CCDB] outline outline-500 outline-chosen-cream dark:outline-[#D5CCDB] rounded-md shadow-card hover:shadow-h-card ease-in-out duration-200 hover:scale-105">
      <div className="h-full">
        <div className="relative h-full text-center mb-2">
          <img src={img} alt={projectName} className="rounded-t-md aspect-2" />
          <div className="text-center font-bold text-[15px] lg:text-[22px]">
            <h2>{projectName}</h2>
          </div>
          <div className="flex justify-center py-2">
            {/* // check if project_url not null */}
            {project_url && (
              <div className="">
                <Tippy
                  theme="austin"
                  animation="scale"
                  placement="left"
                  arrow={false}
                  delay={100}
                  content={<span>Check out the dashboard!</span>}
                  project_url={true}
                >
                  <a
                    id="tooltip"
                    href={project_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex transition-all ease-in-out hover:shadow-card items-center bg-primary text-black px-2 mr-2 rounded-md duration-500 hover:bg-[#ffbbbb] dark:hover:bg-[#8d7d99] transform-gpu active:scale-105"
                  >
                    <button project_url={true}>
                      <FiExternalLink className="h-10 w-10" />
                    </button>
                  </a>
                </Tippy>
              </div>
            )}
            <div className="">
              <Tippy
                theme="austin"
                animation="scale"
                placement="right"
                arrow={false}
                delay={100}
                content={<span>View the repo!</span>}
              >
                <a
                  id="tooltip"
                  href={github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex transition-all ease-in-out hover:shadow-card items-center bg-primary text-black px-2 mr-2 rounded-md duration-500 hover:bg-[#ffbbbb] dark:hover:bg-[#8d7d99] transform-gpu active:scale-105"
                >
                  <button>
                    <BsGithub className="h-10 w-10" />
                  </button>
                </a>
              </Tippy>
            </div>
          </div>
          <div className="text-xl leading-relaxed px-3 pb-3">
            <p>{projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsTiles
