import React from 'react'
import twitter from "./../../assets/img/x.svg"

const Footer = () => {
  return (
    <footer>
    <div className='conatiner-fluid px-6 md:flex justify-between items-center text-center my-4'>
           <p className='font-semibold'>© 2024 Depth 'N Green.
           <a href='https://perspect.com/' target='_blank'>
           Powered by Perspect Ecommerce
           </a></p>

           <div className='flex'>
            <p className='font-semibold mr-4'>7 Broad Canal Way, Cambridge, MA 02142</p>
            <a href='https://www.instagram.com/depthngreeninspiredfood/' target='_blank'> 
            <img src='./src/assets/img/instagram.svg' alt='instagram'/>
            </a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fdepth_n_green' target='_blank'>
                <img src={twitter} alt='twitter'/>
            </a>
           </div>
    </div>
    </footer>
  )
}

export default Footer