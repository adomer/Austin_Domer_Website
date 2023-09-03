import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'

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
      <div className="box mx-auto pl-[68px] lg:pl-[88px] container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...projectString]}
              index={15}
            />
          </h1>
          <p>
            Hi, my completed projects can be found here. There's not much here
            currently, but I'll be adding more projects in the coming weeks.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
