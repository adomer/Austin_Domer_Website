import { useCallback, useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Particles from 'react-particles'
import homeParticlesOptions from './indexParticles.js'
import { loadSlim } from 'tsparticles-slim'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [...' Austin']
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  return (
    <>
      <div id="home" className="">
        <Particles
          className="bg-#ff8888"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={homeParticlesOptions}
        />
        <div className="flex justify-center min-h-screen box container home-page">
          <div className="flex items-center justify-center w-full text-3xl mx-auto px-4 text-zone">
            <div className="pl-[65px] lg:pl-[85px] gap-10 flex flex-col justify-center w-full text-3xl mx-auto">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  index={15}
                />
              </h1>
              <h2 className="dark:text-[#D5CCDB]"> Senior Data Analyst </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
