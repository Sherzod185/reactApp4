import React from 'react'
import "./footer.css"
const Footer = () => {
  return ( 
<div className="container">

  <div className="footer-block">
    <div className="block1">
      <div className="logo-block">
        <p className="logotif">LOGO</p>
      <p className="text-f">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
      </p>
      </div>
    </div>
    <div className="block2">
<h3 className="titlef">Follow Us</h3>
<p className="text-f">Since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="block3">
<h3 className="titlef">Contact Us</h3>
<p className="text-f">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>

    </div>
  </div>

</div>

  );
}

export default Footer