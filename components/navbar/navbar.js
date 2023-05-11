import React, { useState } from 'react'
import Link from 'next/link'
const Navbar = () => {
  const [menuToggle,setMenuToggle]=useState(false)
  let category=["Business","Entertainment","General","Health","Science","Sports","Technology"]
  return (
    <>
    <header className="bg-white bg-gradient-to-l from-[#1e889b] body-font fixed top-0 w-full py-3 px-5 rounded-br-3xl rounded-bl-3xl">
  <nav className=" flex items-center justify-between gap-3 md:gap-5 ">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900">
  {/* logo */}
      <span className="text-sm whitespace-nowrap sm:text-xl">News Zone</span>
    </Link>
    <div className={` flex flex-col gap-3 md:flex-row md:static h-[100vh] md:h-[unset] overflow-auto duration-300 w-[calc(100vw-4rem)] md:w-[unset] absolute bg-white  md:bg-transparent top-0 ${menuToggle && "!right-[0%]"} md:items-center text-basess -right-[100%] bg-[#1e889b] md:bg-transparent`}>
      <button className='md:hidden fixed top-0 ' onClick={()=>{setMenuToggle(false)}}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

      </button>
      <Link href="/" className="p-4 md:p-0 text-lg hover:text-gray-900">Home</Link>
      <Link href="/about" className="p-4 md:p-0 text-lg hover:text-gray-900">About</Link>
   {
     category&& category.map((e,i)=>{
      return(

        <Link href={`/category/${e}`} key={i}  className="p-4 md:p-0 text-lg hover:text-gray-900">{e}</Link>
      )
     })

    } 
 
    </div>

    <button className='md:hidden '  onClick={()=>{setMenuToggle(true)}} >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

</button>

    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button> */}
  </nav>
</header>

    </>
  )
}

export default Navbar