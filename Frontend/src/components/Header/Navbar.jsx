import React from "react";
import {Link, NavLink} from "react-router-dom";
import downArrow from "../../assets/down-arrow.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="mainNavbar">
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => `${isActive? "activeNavbar" : ""}`}>Home</NavLink>
            </li>
            <li>
              About Us
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="/about" className="Navbar-Link">MCAET Ambedakar Nagar</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Act</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Admissions
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Admission Process</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Brouchre</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Syllabus</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Fees</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Queries</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              Academics
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Course</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Academic Calender</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">List of Holidays</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Academic Result</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              Campus
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Campus Tour</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Campus Images</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              Researches
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">M.tech Researchers</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">P.hd Researchers</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              Alumni
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Institute Alumni Interaction Cell</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Alumni Association MCAET</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Alumni Registration portal</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Alumni giving back portal</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              Media
              <img src={downArrow} alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="Navbar-Link">Web cast</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
