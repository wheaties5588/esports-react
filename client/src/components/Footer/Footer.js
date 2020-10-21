import React from "react";
import "./Footer.css";

function Footer() {
  return (
<div className="mt-1 pt-4 pb-1 footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-xs-12 about-company">
        <h5>Select Difficulty</h5>
        <p className="pr-5 text-white-50">Select Difficulty is a website built for entertainment, education, and live information.
                              ​Select Difficulty is licensed under MIT license.
                              &copy; 2020 Team MAjcMW. </p>
                              <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
​
      </div>
      <div className="col-lg-3 col-xs-12 links">
        <h6 className="mt-lg-0 mt-sm-3">Team</h6>
          <ul className="m-0 p-0">
​
            <li>
              <a href="https://github.com/wheaties5588" target="_blank"><strong>MW</strong> - Matt Wieciech</a>
            </li>
​
            
            <li>
              <a href="https://github.com/Kaylan83" target="_blank"><strong>MA</strong> - Murad Alkaylanie</a>
            </li>
            
            
            <li>
              <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><strong>JC</strong> - Jason Cruz</a>
            </li>
          </ul>
      </div>
      <div className="col-lg-4 col-xs-12 location">
        <h6 className="mt-lg-0 mt-sm-4">Location</h6>
        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
        <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
        <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
      </div>
    </div>
  </div>
</div>
  );
}


export default Footer;