import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import Context from '../context/Context'
const MainLayout = ({children}) => {
  const {progress, setProgress}=useContext(Context)
  const router = useRouter()

  useEffect(() => {
  

    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
7
  
  }, [router])
  return (
    <>
     <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
    <Navbar/>
    {children}
    </>
  )
}

export default MainLayout