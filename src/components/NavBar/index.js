import { Link } from 'react-scroll'
import './index.scss'
import Switcher from './darkModeSwitcher'

const NavBar = () => (
  <div className="h-[60px] w-full flex bg-black fixed z-10">
    <div className="items-center flex justify-center w-full text-2xl ">
      <nav className="fixed z-10 px-7 flex justify-between items-center nav link container">
        <Link
          activeclassname="active"
          to="home"
          className="font-sm text-white hover:text-chosen-green"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          href=""
          color="white"
        >
          HOME{''}
        </Link>
        <Link
          activeclassname="active"
          className="font-sm text-white hover:text-chosen-green"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          href=""
        >
          ABOUT
        </Link>
        <Link
          activeclassname="active"
          className="font-sm text-white hover:text-chosen-green"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          href=""
        >
          PROJECTS
        </Link>
        <Link
          activeclassname="active"
          className="font-sm text-white hover:text-chosen-green"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          href=""
        >
          CONTACT
        </Link>
        <div className="pt-6">
          <Switcher />
        </div>
      </nav>
    </div>
    {/* <div className="flex justify-center py-5 lg:py-10 social-icons">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/austin-domer/"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/austin-domer/"
              bgColor="#4d4d4e"
              style={{ height: 'none', width: 'none' }}
              className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/adomer">
            <SocialIcon
              url="https://github.com/adomer"
              bgColor="#4d4d4e"
              style={{ height: 'none', width: 'none' }}
              className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/austin_domer/"
          >
            <SocialIcon
              url="https://www.instagram.com/austin_domer/"
              bgColor="#4d4d4e"
              style={{ height: 'none', width: 'none' }}
              className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.discordapp.com/users/166058942278008832"
          >
            <SocialIcon
              url="https://www.discordapp.com/users/166058942278008832"
              bgColor="#4d4d4e"
              style={{ height: 'none', width: 'none' }}
              className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
        </li>
      </ul>
    </div> */}
  </div>
)

export default NavBar
