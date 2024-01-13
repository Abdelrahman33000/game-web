import React from "react";
// import Logo from ' ../../../src/component/images/Logo.jpg'
import Logo from "../images/Logo.jpg";
const Header = () => {
  return (
    <header className="d-flex justify-content-between mx-2   my-3 align-items-center">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "70px", height: "100px" }}
        className="me-3 img"
      />

      <div className=" text-end  " >
        <p  className="" style={{ color: "#093266", fontSize: "20px" }} dir="rtl">
          {" "}
          "العاب السلامة وتنمية الفكر ارجوحة"
        </p>
        <img src="/phone-call-svgrepo-com.svg" alt="" width={20} /> <span> +966 54 531 1121 </span>
      </div>
    </header>
  );
};

export default Header;
