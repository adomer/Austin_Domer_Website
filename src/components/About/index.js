import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Photo from '../../assets/images/Avatar.jpg'
import Photo4 from '../../assets/images/PugsTogether2.jpg'


const aboutString = 'About me'

const About = () => {
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
      <div id="about" className="">
        <div className="box mx-auto container px-[10px] lg:pl-[20px] about-page">
          <div className="flex justify-center">
            <img
              className="py-[5px] max-w-l sm:max-w-3xl lg:max-w-5xl rounded-full"
              src={Photo}
              alt=""
            />
          </div>
          <div className="py-[25px] text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[...aboutString]}
                index={15}
              />
            </h1>
            <p>Hi! My name is Austin Domer.</p>
            <br />
            <p>
              I'm a senior data analyst with an interest in software development. My professional experience is
              primarily within SQL, PowerBI, and Excel. I enjoy making other's lives easier by automating repeatable tasks 
              with either Power Automate or Python. I've recently started familiarizing myself with DBT, and hope to continue
              growing in my data modeling capabilities.
            </p>
            <br />
            <p>
              Beyond professional work, my current hobbies include playing with
              my two (very cool) pugs, pictured below, fitness, and gaming. I've
              been involved in some form of weight-lifting for over 10 years at
              this point, with a focus on powerlifting in recent years. This year I 
              set out to begin learning Japanese, with the goal of eventually passing
              the N1 exam. I'm also a big fan of touge driving, but it's not
              something that I'm able to do often.{' '}
            </p>
            <br />
            <p>
              Feel free to contact me through any of the platforms listed in the
              Contact section. Thanks for stopping by!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="py-[5px] max-w-l sm:max-w-3xl lg:max-w-5xl rounded-full"
              src={Photo4}
              alt="two pugs"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
