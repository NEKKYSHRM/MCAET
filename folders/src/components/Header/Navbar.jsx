"use client"; // Ensures the component is a client-side component in Next.js

import React from "react";
import Link from "next/link"; // Changed from react-router-dom to next/link
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="mainNavbar">
          <ul>
            <li>
              {/* Changed NavLink to Link and added inline logic for active class */}
              <Link href="/" className="Navbar-Link">
                Home
              </Link>
            </li>
            <li>
              About Us
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="/about" className="Navbar-Link">
                      MCAET Ambedakar Nagar
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Act
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Admissions
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Brouchre
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Syllabus
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Fees
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Queries
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Academics
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Academic Calender
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      List of Holidays
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Academic Result
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Campus
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Campus Tour
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Campus Images
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Researches
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      M.tech Researchers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      P.hd Researchers
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Alumni
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Institute Alumni Interaction Cell
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Alumni Association MCAET
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Alumni Registration portal
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Alumni giving back portal
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Media
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu">
                <ul>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Navbar-Link">
                      Web cast
                    </Link>
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
