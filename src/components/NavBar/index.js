// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
// import { Link as LinkRouter } from 'react-router-dom'
import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'
// import { SocialIcon } from 'react-social-icons'
import Switcher from './darkModeSwitcher'

const NavBar = () => (
  <div className="h-[60px] w-full flex bg-black fixed z-10">
    <div className="items-center flex justify-center w-full text-2xl ">
      {/* <LinkRouter onClick={()=> setClick(value: false)} to='/'>HOME</LinkRouter> */}
      <nav className="fixed z-10 px-7 flex justify-between items-center nav link container">
        {/* <Link
          // exact="true"
          activeclassname="active"
          to="home"
          className="font-sm text-white"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=""
          color="white"
        >
          Austin Domer
        </Link> */}
        <Link
          // exact="true"
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
          {/* <FontAwesomeIcon icon={faHome} color="#4d4d4e" size="2x" /> */}
        </Link>
        <Link
          // exact="true"
          activeclassname="active"
          className="font-sm text-white hover:text-chosen-green"
          to="about"
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
          href=""
        >
          ABOUT
          {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" size="2x" /> */}
        </Link>
        <Link
          // exact="true"
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
          {/* <FontAwesomeIcon icon={faFolder} color="#4d4d4e" size="2x" /> */}
        </Link>
        {/* </nav> */}
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
