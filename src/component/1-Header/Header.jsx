import React from "react";
// import Logo from ' ../../../src/component/images/Logo.jpg'
import Logo from "../images/Logo.jpg";
const Header = () => {
  return (
    <header className="d-flex justify-content-between mx-5   my-3 align-items-center">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "80px", height: "100px" }}
        className="me-3 img"
      />

      <div className=" mail ">
        <p className="" style={{ color: "#093266", fontSize: "25px" }}>
          {" "}
          ألعاب السلامه
        </p>
      </div>
    </header>
  );
};

export default Header;
