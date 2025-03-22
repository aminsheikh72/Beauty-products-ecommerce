import React from 'react'
import logo from '../assets/nav.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/slices/authSlice'

const Navbar = () => {
    const {user}= useSelector((state)=> state.auth)
    const dispatch =useDispatch()
    const {pathname} = useLocation()
    console.log(pathname);
    
  return (
    <div className=' w-full flex items-center justify-center'>
    <div className=' w-full bg-white md:w-[80%] md:rounded-4xl md:relative top-5 md:shadow-2xl h-22 flex items-center justify-between border-b-1 shadow-xl border-b-gray-400 '>
    <div className=' w-[20%] h-auto flex items-center justify-end md:justify-start md:pl-20 md:w-[70%]'>
    <img className=' w-20' src={logo} alt="" />
    </div>
   {
    !user ? (
        <>
        <div className=' w-[80%] h-auto flex items-center justify-evenly flex-wrap px-2' >
      <Link className={
        pathname === '/' ? ' px-3  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl ' : ' px-3  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/'>Home</Link>
      <Link  className={
        pathname === '/products' ? ' px-3  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl ' : ' px-3  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/products'>Products</Link>
      <Link className={
        pathname === '/login' ? ' px-3  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl flex items-center justify-between' : 'flex items-center justify-between px-3  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/login'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
Login</Link>
      
    </div>
        </>
    ) : (
        <>
        <div className=' w-[80%] h-auto flex items-center justify-evenly flex-wrap px-2' >
      <Link className={
        pathname === '/' ? ' px-6  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl ' : ' px-6  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/'>Home</Link>
      <Link  className={
        pathname === '/products' ? ' px-6  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl ' : ' px-6  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/products'>Products</Link>
      <button onClick={()=>dispatch(logoutUser())} className= ' px-6 mx-1 my-1 bg-red-500 text-white rounded-md md:text-xl flex items-center justify-between !important '
       ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
Logout</button>
      <Link className={
        pathname === '/cart' ? ' px-6  mx-1 my-1 bg-indigo-100 rounded-md md:text-xl flex items-center justify-between' : '  flex items-center justify-between px-6  mx-1 my-1 hover:bg-indigo-100 rounded-md md:text-xl'
      } to='/cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
Cart</Link>
    </div>
        </>
    )
   }
    </div>
    </div>
  )
}

export default Navbar
