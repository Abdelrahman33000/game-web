import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' dir='rtl'>
        <p>مواقع التواصل الإجتماعي</p>
        <Link className='link' to="https://api.whatsapp.com/send?phone=966545311121"> whatsapp</Link>
        <Link className='link' to="https://www.instagram.com/safety._.games?igsh=MWp2YjJmMG92bDNreQ=="> instagram </Link>

    </div>
  )
}

export default Footer