import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-screen lg:px-20 xl:px-30'>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default page
