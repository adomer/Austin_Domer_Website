import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
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
            be found here.
          </p>
        </div>
        <div className="py-[15px] pl-[2px] pr-[5px] grid grid-cols-1 gap-12 lg:gap-10 lg:grid-cols-2 justify-items-center">
          <ProjectsTiles
            img={Photo6}
            project_url="https://public.tableau.com/app/profile/austin.domer5220/viz/SF6MasterAnalysis/SF6_Analysis?publish=yes"
            github_url="https://github.com/adomer/sf6AnalysisData"
            projectDescription="Analysis of various data points across the Master rank
            within Street Fighter 6. Python was used to scrape the data
            from Capcom's website, and the visualization was done in
            Tableau."
            projectName="Street Fighter 6 Analysis"
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
            the dataframe & visualization. Circle size correlates with
            driver count by city."
            projectName="PyBer Analysis"
          />
        </div>
      </div>
    </>
  )
}

export default Projects
