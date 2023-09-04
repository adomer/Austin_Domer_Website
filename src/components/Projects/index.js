import './index.scss'
import '../tippy-tooltip/tippyTooltip.css'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import TippyTooltip from '../tippy-tooltip/TippyTooltip'
import Photo4 from '../../assets/images/website_headline.png'
import Photo5 from '../../assets/images/Pyber2.png'

const projectString = 'Projects'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  return (
    <>
      <div className="box mx-auto pl-[68px] lg:pl-[88px] min-h-screen container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...projectString]}
              index={15}
            />
          </h1>
          <p>
            Hi, thanks for checking out my projects. My completed projects can
            be found here. There's not much here currently, but I'll be adding
            more projects in the coming weeks.
          </p>
        </div>
        <div className="py-[15px] pl-[2px] pr-[5px] grid grid-cols-1 gap-12 lg:gap-10 lg:grid-cols-2 justify-items-center">
          <div className="bg-chosen-cream dark:bg-[#D5CCDB] outline outline-500 outline-chosen-cream dark:outline-[#D5CCDB] rounded-md shadow-card hover:shadow-h-card ease-in-out duration-200 hover:scale-105">
            <div className="h-full">
              <div className="relative h-full text-center mb-2">
                <img
                  src={Photo4}
                  alt="website screenshot"
                  className="object-cover rounded-t-md aspect-2"
                />
                <div className="text-center font-bold text-[15px] lg:text-[22px]">
                  <h2>Personal Website</h2>
                </div>
                <div className="flex justify-center data-tippy-content">
                  <a
                    id="tooltip"
                    href="https://github.com/adomer/Austin_Domer_Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TippyTooltip className="tomato" />
                  </a>
                </div>
                <div className="text-xl leading-relaxed px-3 pb-3">
                  <p>Personal website/portfolio built with React.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-chosen-cream outline dark:bg-[#D5CCDB] outline-500 outline-chosen-cream dark:outline-[#D5CCDB] rounded-md shadow-card hover:shadow-h-card ease-in-out duration-200 hover:scale-105">
            <div className="h-full">
              <div className="relative h-full text-center mb-2">
                <img
                  src={Photo5}
                  alt="Pyber Analysis screenshot"
                  className="rounded-t-md aspect-2"
                />
                <div className="text-center font-bold text-[15px] lg:text-[22px]">
                  <h2>PyBer Analysis</h2>
                </div>
                <div className="flex justify-center data-tippy-content">
                  <a
                    id="tooltip"
                    href="https://github.com/adomer/PyBer_Analysis/tree/main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TippyTooltip />
                  </a>
                </div>
                <div className="text-xl leading-relaxed px-3 pb-3">
                  <p>
                    A mock analysis of the different fares by the types of city
                    for PyBer. Built in Jupyter using Pandas and Matplotlib for
                    the dataframe & visualization. Circle size correlates w/
                    driver count by city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
