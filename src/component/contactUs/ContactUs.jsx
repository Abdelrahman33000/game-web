import React from "react";
import "./ContactUs.css";
import {Link} from 'react-router-dom'
import Lottie from "lottie-react";

import contact from "../../component/animation/contact.json";

const ContactUs = () => {
  return (
    <div className="container " dir="rtl">


      <div className="  text-center p-4">
        <h1 className="mb-4">
          <b>نموذج الاتصال </b>{" "}
        </h1>
        <h4 style={{fontSize:"20px"}}>نحن هنا دائمًا من أجلك لتقديم أفضل خدمة
</h4>
      </div>

      <div className="container-fluide side rounded-5    me-2 ">
        <div className="row">

          <div className="side1  ms-2  mb-5 rounded-4 mt-2 shadow-lg  col-lg-3">
        <Lottie animationData={contact}   />

            <h4  className="p-5">طلب معاودة الاتصال
</h4>
            <h5  className="mx-4 mb-4">ما عليك سوى ترك رقم الاتصال الخاص بك، وسنعاود الاتصال بك.

</h5>
<div className="p-4 text-center"  dir="rtl">
  
  <button className="p-3 mb-5 w-50 rounded-4 btn5"><Link to={"https://api.whatsapp.com/send?phone=966545311121"} style={{textDecoration:"none" , color:"#fff"}}> راسلنا على الواتس 
 </Link>
  
  </button> <br />
  <button className="p-3 w-50 rounded-4 btn5" >
    <Link to={"https://www.instagram.com/safety._.games?igsh=MWp2YjJmMG92bDNreQ=="} style={{textDecoration:"none" , color:"#fff"}}>  راسلنا على انستجرام </Link>
  </button>
        
</div>  
          
          </div>

          <div className="container-fluide  my-5 ms- shadow-lg   rounded-4 mt-2 col-lg-8">
            <form action={"#"} className="contact ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className="me-3 form-control">
                  <div>
                    <label>الأسم</label>
                  </div>
                  <input type="text" className="inp mt-3" style={{outline:"none"}} required />
                </div>
         
              </div>

              <div className="d-flex me-3  justify-content-around my-5">
             
                <div className="me-0  form-control">
                  <div>
                    <label>البريد  الألكترونى</label>
                  </div>
                  <input type="email" className="inp mt-3" required />
                </div>
              </div>
<div className="me-3">
              <div className="mt-5 mb-3 text-light">
                {/* <label>الرساله</label> */}
              </div>
              <textarea placeholder="الرساله" className="form-control rounded-5  p-4  w-100" style={{backgroundColor:"#b4b4ad" }} required></textarea>
              </div>

              <div
                className=" my-5 px-3"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <button className="btn5 p-3 rounded-4 w-100">ارسال</button>
              </div>
            </form>
          </div>


        </div>
      </div>


    </div>
  );
};
export default ContactUs;
