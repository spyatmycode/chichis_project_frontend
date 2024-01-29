import React from 'react'
import { useCartContext } from '../providers/CartProvider'
import { Link, Navigate } from 'react-router-dom'

const Profile = () => {
    const {user, setUser} = useCartContext()
    if(!user.user) return <Navigate to={"/auth"} />
  return (
    <div className='w-full h-full flex justify-center flex-col items-center'>
    <form className="w-full max-w-lg px-4 py-5 lg:border-2 lg:px-12 lg:py-12 lg:rounded-md h-full " >
      
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Username
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" 
          value={user.user.username}
            name='username'
            required
          />
         
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" 
            name='email'
            required
            value={user.user.email}
          />
         
        </div>
      </div>
      <div className='my-3 text-red-500'>
        <h6 className='text-xs'> Account verification details</h6>
        <hr />
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="tonto@dikeh.com"
          value={"********************"}
          
          />

        </div>
      </div>
      

      
      <div className="flex flex-wrap -mx-3 mb-2">
      
       

      </div>
      <div className='w-full py-5 flex flex-col gap-2 '>
       <Link to={-1}>
       <button   className='w-full py-2 rounded-md bg-blue-500 text-white'>
          Go Back
        </button>
       </Link>
      
       <button  className='w-full py-2 rounded-md bg-red-500 text-white' onClick={()=>{localStorage.removeItem("ecommuser"); window.location.reload()}}>
        Log out
        </button>
   
      </div>
    </form>
  </div>
  )
}

export default Profile