import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer px-5 py-3' dir='rtl'>
        <p className='me-5'>مواقع التواصل الإجتماعي</p>
        <Link className='link' to="https://api.whatsapp.com/send?phone=966545311121"> whatsapp</Link>
        <Link className='link ms-5' to="https://www.instagram.com/safety._.games?igsh=MWp2YjJmMG92bDNreQ=="> instagram </Link>

    </div>
  )
}

export default Footer