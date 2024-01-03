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

      <div className="  ">
        <p className="" style={{ color: "#093266", fontSize: "20px" }}>
          {" "}
          "العاب السلامة وتنمية الفكر ارجوحة"
        </p>
      </div>
    </header>
  );
};

export default Header;
