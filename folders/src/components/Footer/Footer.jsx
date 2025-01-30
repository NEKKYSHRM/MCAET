import React from "react";
import "./Footer.css";
import "../Header/Navbar.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="pre-footer text-white">
          <ul>
            <li>
              <Link href="/signup" className="Navbar-Link cursor-pointer">
                Administration Corner
              </Link>
            </li>
            <hr />
            <li>
              <a href="#">Student Corner</a>
            </li>
            <hr />
            <li>
              <a href="#">Employee Corner</a>
            </li>
            <hr />
            <li>
              <a href="#">ANDUAT</a>
            </li>
            <hr />
            <li>
              <a href="#">Councils</a>
            </li>
          </ul>
        </div>
        <div className="footer-objects w-full bg-black">
          <div className="footer-rightSide">
            <span>GET IN TOUCH</span>
            <p>
              Mahamaya College Of Agricultural Engineering & Technology,
              Akbarpur, Ambedkar Nagar, 224122 (U.P.)
            </p>
            <p>Phone :</p>
            <p>Email : </p>
          </div>
          <hr style={{ order: 2 }} />
          <div className="footer-lists">
            <ul>
              <li>
                <a href="#">Administration</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">In Media</a>
              </li>
              <li>
                <a href="#">Research Journals</a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <a href="#">AMS ANDUAT</a>
              </li>
              <li>
                <a href="#">Internal Complaints</a>
              </li>
              <li>
                <a href="#">Recruitment</a>
              </li>
              <li>
                <a href="#">Academic Links</a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <a href="#">Hostels</a>
              </li>
              <li>
                <a href="#">Anti Ragging</a>
              </li>
              <li>
                <a href="#">Academic Calender</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <a href="#">Privacy - Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyrights &copy; 2024 MCAET. All rights reserved. | Designed and
            developed by
            <span style={{ fontWeight: "bold" }}>
              <a style={{ textDecoration: "none", color: "white" }} href="#">
                {/* SoftSculpt Innovations */}
                Nikhil Kumar Sharma
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
