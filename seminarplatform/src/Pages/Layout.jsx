import { Outlet, Link } from 'react-router-dom'
import Logo from '../static/logo.png'

const Layout = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <header className="bg-transparent backdrop-blur-2xl top-0 sticky mb-9 z-10 h-20 w-full">
          <div className="max-w-4xl mx-auto flex justify-between items-center p-4 h-20">
            <div className="overflow-hidden ">
              <img src={Logo} alt="WinsmartAcademy" className="w-36 h-24 object-cover" />
            </div>
            <div className="">
              <Link to='/register'
              className="w-30 h-16 bg-purpleP px-4 py-3 rounded-lg text-white text-sm translate-y-5"
              >Register</Link>
            </div>
          </div>
         {/* <hr className="w-80 mx-auto border-neutral-600 my-6 border" /> */}
        </header>
        
        <div className="mt-16 pb-5">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout