import React from "react";
import "../assets/css/styleku.css";
import Logo from "../assets/img/home-1.jpg";
import Footer from "../component/Footer";
// import Navigation from "../component/Nav";
// import Nav from "../component/Nav"

function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <img src={Logo} width="100%" alt="sda" />
      <Footer />
    </>
  );
}

export default Home;
