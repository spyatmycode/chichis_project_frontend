import { NavLink } from "react-router-dom"

export const Sidebar = ({ toggleSideBarOpen }) => {
  return (
    <div className="flex">
      <div className='fixed flex flex-col gap-6 top-0 left-0 z-10 h-screen bg-white p-5 w-2/3 font-bold'>
        <button onClick={toggleSideBarOpen}
          className='mb-6 mt-1'>
          <img src="./images/icon-close.svg" alt="" />
        </button>
        <NavLink to={"/"} className={(link) => link.isActive ? "text-blue-400" : ""}>
          Products
        </NavLink>
        <NavLink to={"/auth"} className={(link) => link.isActive ? "text-blue-400" : ""}>
          Account
        </NavLink>
        <NavLink to={"/contact"} className={(link) => link.isActive ? "text-blue-400" : ""}>
          Contact
        </NavLink>

      </div>
      <div className='fixed top-0 bottom-0 right-0 z-10 w-1/3 bg-black-75 bg-opacity-75'></div>
    </div>
  )
}
