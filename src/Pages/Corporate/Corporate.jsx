import React from 'react'
import Home from '../HOme/Home'
import Second from './SecondSec/Second'
import MiddleSec from './MiddleSec/MiddleSec'
import Footer from '../Foooter/Footer'


const Corporate = () => {
  return (
    <div>
<Home/>
<Second   name="ABOUT US" text="Home  > Corporate >  AboutUs"  />
<MiddleSec/>
<Footer/>
    </div>
  )
}

export default Corporate