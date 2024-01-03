import React from 'react'
import './Products.css'
import img from '../../component/images/IMG-20240102-WA0013.jpg'
import img1 from '../../component/images/IMG-20240102-WA0014.jpg'
import img2 from '../../component/images/IMG-20240102-WA0015.jpg'
import ContactUs from '../../component/contactUs/ContactUs'
const Products = () => {
  return (
    <div className='productsPage' >
        <h1> جميع المنتجات</h1>
        <img src={img} alt=""   className='imgPro my-5'/ >
        <p>ألعاب السلامة للجملة نرحب بجميع عملائنا في جميع مدن المملكة ونقدم لكم كل ماهو جديد اول بأول وبأسعار</p>
        <p>تنافسية 👌 فقط اختر ماتريد من المنتج بأسهل مايمكن فقط اضغط على الصورة اسفل وتواصل معنا   
</p>
        <img src={img1} alt=""   className='imgPro'/>
        <img src={img2} alt=""   className='imgPro'/>

        <ContactUs />
        <iframe title='العاب السلام و تنيمه الفكر' style={{width:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.153196024286!2d39.5969248!3d24.5493676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbd04fc5f70df%3A0x7d01a8e958b08010!2z2KfZhNi52KfYqCDYp9mE2LPZhNin2YUg2Ygg2KrZhtmK2YXZhyDYp9mE2YHZg9ix!5e0!3m2!1sen!2seg!4v1704287317332!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
  )
}

export default Products