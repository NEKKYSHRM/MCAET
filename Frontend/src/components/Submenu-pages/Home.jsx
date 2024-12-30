import React, { useEffect, useState } from "react";
import gov1 from "../../assets/govSites/govSite_1.png";
import gov2 from "../../assets/govSites/govSite_2.png";
import gov3 from "../../assets/govSites/govSite_3.png";
import gov4 from "../../assets/govSites/govSite_4.png";
import gov5 from "../../assets/govSites/govSite_5.png";
import gov6 from "../../assets/govSites/govSite_6.png";
import hero1 from "../../assets/Hero Slider/hero1.jpg";
import hero2 from "../../assets/Hero Slider/hero2.jpg";
import "./Home.css";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideImages = [
    hero1,
    hero2,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slideImages.length]);

  return (
    <>
      <main>
      <div class="navSide">
            <ul>
                <li><a href="sideNav-HTML-Pages/administration.html">Administration</a></li>
                <li><a href="sideNav-HTML-Pages/departments.html">Departments</a></li>
                <li><a href="sideNav-HTML-Pages/faculty.html">Faculty</a></li>
                <li><a href="sideNav-HTML-Pages/placement.html">Placement</a></li>
                <li><a href="sideNav-HTML-Pages/courseCatalouge.html">Course Catalouge</a></li>
                <li><a href="sideNav-HTML-Pages/examinationCell.html">Examination Cell</a></li>
                <li><a href="sideNav-HTML-Pages/resources.html">Resources</a></li>
            </ul>
        </div>
        <section class="hero">
          <div class="hero-link">
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
          <div class="hero-slider">
            <div className="slides">
              <img id="slideImg"
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
              />
            </div>
          </div>

          <div class="hero-right">
            <table class="events">
              <thead>
                <tr>
                  <th class="table-head">Events</th>
                </tr>
              </thead>
              <tbody class="table-body">
                <td>
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipi sicing elit.
                    Quibusdam, quod.
                  </a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
              </tbody>
              <tfoot>
                <tr>
                  <th class="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>

            <table class="events">
              <thead>
                <tr>
                  <th class="table-head">News</th>
                </tr>
              </thead>
              <tbody class="table-body">
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
                <td>
                  <a href="#">Admissions</a>
                </td>
              </tbody>
              <tfoot>
                <tr>
                  <th class="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="separation"></div>
        </section>

        <section class="govCarousel">
          <div class="govSlider">
            <div class="gov-slide-track">
              <div class="gov-slide">
                <img src={gov1} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov2} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov3} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov4} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov5} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov6} height="100" width="250" alt="" />
              </div>
              <div class="gov-slide">
                <img src={gov1} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov2} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov3} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov4} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov5} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={gov6} height="100" width="250" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
