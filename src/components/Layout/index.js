import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-[#ff8888] dark:bg-[#38313e]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
