import './index.scss'
import { SocialIcon } from 'react-social-icons'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const contactString = 'Contact Me'

const Contact = () => {
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
    <div
      id="contact"
      className="w-full box mx-auto px-[10px] lg:pl-[20px] min-h-screen-without-navBar container contact-page"
    >
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...contactString]}
            index={15}
          />
        </h1>
      </div>
      <div className="min-h-screen-with-contact flex flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/austin-domer/"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/austin-domer/"
            bgColor="#fff"
            style={{ height: 'none', width: 'none' }}
            className=" w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/adomer">
          <SocialIcon
            url="https://github.com/adomer"
            bgColor="#fff"
            style={{ height: 'none', width: 'none' }}
            className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/adomer">
          <SocialIcon
            url="mailto:austin.domer81@gmail.com"
            bgColor="#fff"
            style={{ height: 'none', width: 'none' }}
            className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.discordapp.com/users/166058942278008832"
        >
          <SocialIcon
            url="https://www.discordapp.com/users/166058942278008832"
            bgColor="#fff"
            style={{ height: 'none', width: 'none' }}
            className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]"
          />
        </a>
      </div>
    </div>
  )
}

export default Contact
