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
        <h4 style={{textAlign:"right"}} dir='rtl'> "العاب السلامة وتنمية الفكر ارجوحة"  </h4>
  
        <img src={img1} alt=""   className='imgPro'/> 
        <img src={img2} alt=""   className='imgPro'/>

        <ContactUs />
        {/* <div className='d-flex px-5 mx-5 'style={{gap:"25px" , flexWrap:"wrap"}}  dir='rtl'>
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
   <iframe title=' موقع شوران  ' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d227.07604629767866!2d39.60404898834343!3d24.40853669912871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI0JzMwLjYiTiAzOcKwMzYnMTQuNiJF!5e0!3m2!1sen!2seg!4v1705781529965!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div className='d-flex align-items-center'>
      <img src={location} alt="" width={25} className='my-5 mx-2 ' />   <p style={{fontSize:"20px"}}>  موقع شوران  </p>
  
</div> 
  </Link>
</div>

</div> */}


<div style={{display:"flex" , justifyContent:"space-around" , gap:"20px" , flexWrap:"wrap" , margin:"20px auto"}}>
      <div>
      <iframe title='العاب السلام و تنيمه الفكر' style={{width:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.153196024286!2d39.5969248!3d24.5493676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbd04fc5f70df%3A0x7d01a8e958b08010!2z2KfZhNi52KfYqCDYp9mE2LPZhNin2YUg2Ygg2KrZhtmK2YXZhyDYp9mE2YHZg9ix!5e0!3m2!1sen!2seg!4v1704287317332!5m2!1sen!2seg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p style={{textAlign:"center"}}> العاب السلام و تنيمه الفكر </p>
 
      </div>

      <div>
      <iframe title=' موقع حراج ' style={{width:"100%"}}  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14196.505950021749!2d31.182028799999994!3d27.183761049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1705951383708!5m2!1sen!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      <p style={{textAlign:"center"}}> موقع حراج  </p>

      </div>

      <div>
      <iframe title=' موقع شوران ' style={{width:"100%"}}  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3633.217566613346!2d39.604051000000005!3d24.408507999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI0JzMwLjYiTiAzOcKwMzYnMTQuNiJF!5e0!3m2!1sen!2seg!4v1705951782377!5m2!1sen!2seg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> 
      <p style={{textAlign:"center"}}> موقع شوران  </p>

      </div>
<div>
<iframe title=' موقع الحلقه ' style={{width:"100%"}}   src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14196.505950021749!2d31.182028799999994!3d27.183761049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1705951913493!5m2!1sen!2seg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />     
<p style={{textAlign:"center"}}> موقع الحلقه  </p>
</div>      
</div>           
           
            </div>
  )
}

export default Products