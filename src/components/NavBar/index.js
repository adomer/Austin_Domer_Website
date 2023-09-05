import { Link } from 'react-scroll'
import './index.scss'
import Switcher from './darkModeSwitcher'

const NavBar = () => (
  <div className="h-[60px] w-full flex bg-black fixed z-10">
    <div className="items-center flex justify-center w-full text-2xl">
      <nav className="fixed z-10 px-7 flex justify-between items-center nav link container">
        <Link
          activeclassname="active"
          to="home"
          className="font-sm text-white hover:text-chosen-green"
          spy={true}
          smooth={true}
          offset={-75}
          duration={400}
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
          duration={400}
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
          duration={400}
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
          duration={400}
          href=""
        >
          CONTACT
        </Link>
        <div className="pt-6">
          <Switcher />
        </div>
      </nav>
    </div>
  </div>
)

export default NavBar
