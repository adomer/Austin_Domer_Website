import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons'

const Sidebar = () => (
  <div className="tracking-tighter lg:tracking-normal w-[65px] flex flex-col justify-between items-stretch h-screen lg:w-[85px] nav-bar">
    <div className="text-[13px] lg:text-[18px] flex justify-center py-5 lg:py-10">
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="flex justify-center py-1 lg:py-2"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" size="2x" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="flex justify-center py-1 lg:py-2 about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" size="2x" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="py-1 lg:py-2 projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" size="2x" />
        </NavLink>
      </nav>
    </div>
    <div className="flex justify-center py-5 lg:py-10 social-icons">
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
            href="https://www.twitch.tv/adomey"
          >
            <SocialIcon
              url="https://www.twitch.tv/adomey"
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
    </div>
  </div>
)

export default Sidebar
