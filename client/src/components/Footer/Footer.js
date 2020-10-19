import React from "react";
import "./Footer.css"

function Footer() {
  return (
<div className="mt-5 pt-5 pb-5 footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-xs-12 about-company">
        <h2>Select Difficulty</h2>
        <p className="pr-5 text-white-50">Select Difficulty is a website built for entertainment, education, and live information.
                              ​Select Difficulty is licensed under MIT license.
                              &copy; 2020 Team MAjcMW. </p>
      </div>
      <div className="col-lg-3 col-xs-12 links">
        <h4 className="mt-lg-0 mt-sm-3">Team</h4>
          <ul className="m-0 p-0">

            <li>
              <p><a href="#"><i className="fa fa-github-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
              <a href="https://github.com/wheaties5588" target="_blank"><strong>MW</strong> - Matt Wieciech</a>
            </li>

            
            <li>
              <p><a href="#"><i className="fa fa-github-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
              <a href="https://github.com/Kaylan83" target="_blank"><strong>MA</strong> - Murad Alkaylanie</a>
            </li>
            
            
            <li>
              <p><a href="#"><i className="fa fa-github-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
              <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><strong>JC</strong> - Jason Cruz</a>
            </li>
          </ul>
      </div>
      <div className="col-lg-4 col-xs-12 location">
        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
        <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
        <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col copyright">
        <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Footer;