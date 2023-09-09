import './index.scss'
// import '../tippy-tooltip/tippyTooltip.css'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import Tippy from '../Projects/projectsTile'
import Photo4 from '../../assets/images/website_headline_dark.png'
import Photo5 from '../../assets/images/Pyber2.png'
import Photo6 from '../../assets/images/SF6_Tableau.png'
import ProjectsTiles from '../Projects/projectsTile'

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
      <div
        id="projects"
        className="box mx-auto px-[10px] lg:pl-[20px] min-h-screen-without-navBar container projects-page"
      >
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
          <ProjectsTiles
            img={Photo6}
            project_url="https://public.tableau.com/app/profile/austin.domer5220/viz/SF6MasterAnalysis/SF6_Analysis?publish=yes"
            github_url="https://github.com/adomer/sf6AnalysisData"
            projectDescription="Analysis of various data points across the Master rank
            within StreetFighter 6. Python was used to scrape the data
            from Capcom's website and the visualization was done in
            Tableau."
            projectName="StreetFighter 6 Analysis"
          />
          <ProjectsTiles
            img={Photo4}
            className="object-cover"
            github_url="https://github.com/adomer/Austin_Domer_Website"
            projectDescription="Personal website/portfolio built with React."
            projectName="Personal Website"
          />
          <ProjectsTiles
            img={Photo5}
            github_url="https://github.com/adomer/PyBer_Analysis/tree/main"
            projectDescription="A mock analysis of the different fares by the types of city
            for PyBer. Built in Jupyter using Pandas and Matplotlib for
            the dataframe & visualization. Circle size correlates w/
            driver count by city."
            projectName="PyBer Analysis"
          />
          {/* <div className="bg-chosen-cream dark:bg-[#D5CCDB] outline outline-500 outline-chosen-cream dark:outline-[#D5CCDB] rounded-md shadow-card hover:shadow-h-card ease-in-out duration-200 hover:scale-105">
            <div className="h-full">
              <div className="relative h-full text-center mb-2">
                <img
                  src={Photo6}
                  alt="website screenshot"
                  className="rounded-t-md aspect-2"
                />
                <div className="text-center font-bold text-[15px] lg:text-[22px]">
                  <h2>StreetFighter 6 Analysis</h2>
                </div>
                <div className="flex justify-center data-tippy-content">
                  <a
                    id="tooltip"
                    href="https://public.tableau.com/app/profile/austin.domer5220/viz/SF6MasterAnalysis/SF6_Analysis?publish=yes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TippyTooltip className="austin" />
                  </a>
                  <a
                    id="tooltip"
                    href="https://github.com/adomer/Austin_Domer_Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TippyTooltip className="austin" />
                  </a>
                </div>
                <div className="text-xl leading-relaxed px-3 pb-3">
                  <p>
                    Analysis of various data points across the Master rank
                    within StreetFighter 6. Python was used to scrape the data
                    from Capcom's website and the visualization was done in
                    Tableau.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    <TippyTooltip className="austin" />
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
                    <TippyTooltip className="austin" />
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Projects
