import React, { useEffect } from "react";
import MCAETLogo from "../../assets/logo.png" 
import "./Header.css"
import { useState } from "react";

export default function Header() {

  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
      const formattedDateTime = currentDate.toLocaleString('en-US', options);
      setCurrentDateTime(formattedDateTime);
    }
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <header>
        <section className="firstHeader">
          <span id="dateSpan">{currentDateTime}</span>
          <span>Temperature</span>
        </section>
        <section className="logo">
          <div className="logo-text1">
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
          <div className="logo-text2">
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
