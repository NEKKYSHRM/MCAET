import React from "react";
import MCAETLogo from "../assets/logo.png" 
import "./Header.css"

export default function Header() {
  return (
    <div>
      <header>
        <section class="firstHeader">
          <span id="dateSpan">Date</span>
          <span>Temperature</span>
        </section>
        <section class="logo">
          <div class="logo-text1">
            <p>
              महामाया कृषि अभियांत्रिकी एवं प्रौद्योगिकी महाविद्यालय,
              <br /> अकबरपुर, अंबेडकर नगर{" "}
            </p>
            <p>
              Mahamaya College Of Agricultural Engineering & Technology
              <br />
              Akbarpur, Ambedkar Nagar
            </p>
          </div>
          <img src={MCAETLogo} alt="" />
          <div class="logo-text2">
            <p>
              आचार्य नरेंद्र देव कृषि एवं प्रौद्योगिकी विश्वविद्यालय,
              <br /> कुमारगंज, अयोध्या
            </p>
            <p>
              Acharya Narendra Deva University of Agriculture & Technology,
              <br /> kumarganj, Ayodhya
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}
