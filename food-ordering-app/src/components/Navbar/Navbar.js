import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [currTime, setCurrTime] = useState(getcurrtime());

  function getcurrtime() {
    let only_hr = new Date().getHours();
    let only_mn = new Date().getMinutes();
    let curr_time = only_hr + ":" + only_mn;
    return curr_time;
  }

  useEffect(() => {
    setInterval(() => {
      setCurrTime(getcurrtime());
    }, 1000);
  }, []);

  let only_date = new Date().getDate();
  let only_mnth = new Date().getMonth() + 1;
  let only_yr = new Date().getFullYear();

  let curr_date = only_date + "/" + only_mnth + "/" + only_yr;

  return (
    <div className="navbar-maincontainer">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="image-logo">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="brandlogo d-inline-block align-text-top"
            ></img>
            <div className="brandname">
              <h4>TastyBites</h4>
            </div>
          </div>
          <span className="brandtitle">
            {curr_date} {currTime}
          </span>
        </div>
      </nav>
    </div>
  );
}
