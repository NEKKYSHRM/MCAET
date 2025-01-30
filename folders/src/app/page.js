"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero1 from "../../public/hero1.jpg";
import hero2 from "../../public/hero2.jpg";
import vcPic from "../../public/FacultyPic/VC_PIC.jpg";
import "./Home.css";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideImages = [hero1, hero2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slideImages.length]);

  return (
    <>
      <main>
        <div className="navSide">
          <ul>
            <li>
              <a href="sideNav-HTML-Pages/administration.html">
                Administration
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/departments.html">Departments</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/faculty.html">Faculty</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/placement.html">Placement</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/courseCatalouge.html">
                Course Catalouge
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/examinationCell.html">
                Examination Cell
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/resources.html">Resources</a>
            </li>
          </ul>
        </div>
        <section className="hero">
          <div className="hero-link">
            <ul>
              <button>
                <a href="sideNav-HTML-Pages/administration.html">
                  Administration
                </a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/departments.html">Departments</a>
              </button>
              <button>
                <a href="/faculty">Faculty</a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/placement.html">Placement</a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/courseCatalouge.html">
                  Course Catalouge
                </a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/examinationCell.html">
                  Examination Cell
                </a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/resources.html">Resources</a>
              </button>
            </ul>
          </div>
          <div className="hero-slider">
            <div className="slides">
              <Image
                id="slideImg"
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
              />
            </div>
          </div>

          <div className="hero-right">
            <table className="events">
              <thead>
                <tr>
                  <th className="table-head">Events</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>
                    <a href="#">MPL 2025</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>

            <table className="events">
              <thead>
                <tr>
                  <th className="table-head">News</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>
                    <a href="#">
                      Lorem ipsum dolor sit amet consectetur adipi sicing elit.
                      Quibusdam, quod.
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="separation"></div>
        </section>

        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-[1fr_2fr] bg-gray-100 place-items-center p-6">
            {/* Left Section (Vice Chancellor Info) */}
            <div className="w-64 flex flex-col items-center justify-center">
              <Image src={vcPic} alt="vc pic" />
              <div className="flex flex-col justify-center items-center text-center font-bold mt-3">
                <p>Dr. Bijendra Singh</p>
                <p>Hon'able Vice Chancellor</p>
                <p>ANDUAT, Ayodhya</p>
              </div>
            </div>

            {/* Right Section (About the College) */}
            <div className="max-w-3xl flex flex-col justify-center items-center text-center">
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <h1 className="font-bold text-4xl text-blue-800 m-3">
                About The College
              </h1>
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <p className="mt-4 text-lg text-justify text-gray-700 leading-relaxed">
                Mahamaya College of Agricultural Engineering and Technology
                (MCAET), Ambedkar Nagar Uttar Pradesh, India-224122 is a
                Government Engineering College under the administration of
                Acharya Narendra Deva University of Agriculture & Technology,
                Kumarganj, Ayodhya. College was established in 2002. College is
                actively involved in teaching, research, and extension in
                Agricultural Engineering, Computer Science and Engineering, and
                Mechanical Engineering. Since 2002, more than 600 students have
                received degrees in various UG and PG courses. This college
                offers undergraduate teaching programs that include B.Tech. in
                Agricultural Engineering, Mechanical Engineering, and Computer
                Science & Engineering. The postgraduate degree and PhD degree is
                also offered by the college in Soil and Water Conservation
                Engineering, Farm Machinery and Power Engineering, Processing
                and Food Engineering, Renewable Energy Engineering, and
                Irrigation and Drainage Engineering.
              </p>
            </div>
          </div>
        </div>

        <section className="govCarousel">
          <div className="govSlider">
            <div className="gov-slide-track">
              <div className="gov-slide">
                <img
                  src="/govSites/govSite_1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="gov-slide">
                <img
                  src="/govSites/govSite_1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
