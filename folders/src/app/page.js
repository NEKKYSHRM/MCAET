"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero1 from '../../public/hero1.jpg'
import hero2 from '../../public/hero2.jpg'
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
                <a href="sideNav-HTML-Pages/faculty.html">Faculty</a>
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
                    <a href="#">
                      MPL 2025
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
