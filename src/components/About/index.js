import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Photo from '../../assets/images/Avatar2-test.jpg'
import Photo4 from '../../assets/images/PugsTogether2.jpg'

const calculateAge = () => {
  var t = new Date().valueOf() - new Date(1998, 0).valueOf()
  t /= 1000 * 60 * 60 * 24 * 365
  return `${Math.floor(t)}.${(t % 1).toFixed(8).substring(2)}`
}

const aboutString = 'About me'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [age, setAge] = useState('')

  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  useEffect(() => {
    const ageInterval = setInterval(() => {
      setAge(calculateAge())
    }, 50)

    return () => clearInterval(ageInterval)
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
            <p>Hi! My name is Austin Domer. I am {age} years old.</p>
            <br />
            <p>
              I'm a data analyst with an interest in software development. I'm
              currently learning JavaScript and Python with the hopes of
              applying them to future projects. My focus in JavaScript has
              primarily consisted of vanilla JS and React, but I'm hoping to
              learn more libraries in the future. My professional experience is
              primarily within Excel, SQL, and Tableau.
            </p>
            <br />
            <p>
              Beyond professional work, my current hobbies include playing with
              my two (very cool) pugs, pictured below, fitness, and gaming. I've
              been involved in some form of weight-lifting for over 10 years at
              this point, with a focus on powerlifting in recent years. In terms
              of gaming, I prefer any competitive style of game. Recently, I've
              taken a large interest in fighting games, namely StreetFighter 6,
              but I've historically been a big fan of shooters like Overwatch
              and Valorant. I'm also a big fan of touge driving, but it's not
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
