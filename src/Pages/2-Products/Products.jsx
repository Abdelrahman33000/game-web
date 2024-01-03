import React from 'react'
import './Products.css'
import img from '../../component/images/IMG-20240102-WA0013.jpg'
import img1 from '../../component/images/IMG-20240102-WA0014.jpg'
import img2 from '../../component/images/IMG-20240102-WA0015.jpg'
import location from '../../component/images/location-sign.svg'
import ContactUs from '../../component/contactUs/ContactUs'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='productsPage' >
        <h1> جميع المنتجات</h1>
        <img src={img} alt=""   className='imgPro my-5'/ >
        <h3 style={{textAlign:"right"}}> "العاب السلامة وتنمية الفكر ارجوحة"  </h3>
  
        <img src={img1} alt=""   className='imgPro'/> 
        <img src={img2} alt=""   className='imgPro'/>

        <ContactUs />
        <div className='d-flex 'style={{gap:"25px"}}  dir='rtl'>
<div className='d-flex align-items-center'>
   <Link to={"https://maps.app.goo.gl/t6jmP6Jg2KYR2yQk8"} style={{textDecoration:'none' , color:"#000" , alignItems:"end"}} >

<div className='d-flex align-items-center'>
      <img src={location} alt="" width={25} className='my-5 mx-2 ' />   <p style={{fontSize:"20px"}}>  موقع حراج  </p>
  
</div>   </Link>
</div>
<div className='d-flex align-items-center'>
   <Link to={"https://maps.app.goo.gl/BFGBZipgTju3B9EW9"} style={{textDecoration:'none' , color:"#000" , alignItems:"end"}} >

<div className='d-flex align-items-center'>
      <img src={location} alt="" width={25} className='my-5 mx-2 ' />   <p style={{fontSize:"20px"}}>  موقع الحلقه  </p>
  
</div>   </Link>
</div>

<div className='d-flex align-items-center'>
   <Link to={"https://maps.app.goo.gl/NWkTYWbUTAHRDBK36"} style={{textDecoration:'none' , color:"#000" , alignItems:"end"}} >

<div className='d-flex align-items-center'>
      <img src={location} alt="" width={25} className='my-5 mx-2 ' />   <p style={{fontSize:"20px"}}>  موقع شوران  </p>
  
</div>   </Link>
</div>

</div>
        <iframe title='العاب السلام و تنيمه الفكر' style={{width:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.153196024286!2d39.5969248!3d24.5493676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbd04fc5f70df%3A0x7d01a8e958b08010!2z2KfZhNi52KfYqCDYp9mE2LPZhNin2YUg2Ygg2KrZhtmK2YXZhyDYp9mE2YHZg9ix!5e0!3m2!1sen!2seg!4v1704287317332!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
  )
}

export default Products