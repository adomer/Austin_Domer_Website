import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page bg-[#ff8888] dark:bg-[#38313e]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
