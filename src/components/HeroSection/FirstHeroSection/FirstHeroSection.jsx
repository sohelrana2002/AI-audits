import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Lottie from "lottie-react";
import AIAUDITS from "../../../assets/Lottie-Files/AiAudits.json";

import "./FirstHeroSection.css";

const FirstHeroSection = (props) => {
  const { description, homeBg, title } = props;
  const typedRef = useRef(null);

  if (homeBg === true) {
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: [" content decetor", "plagiarism decetion"],
        startDelay: 700,
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => {
        typed.destroy();
      };
    }, []);
  }

  return (
    <section id="hero">
      <div className="container firsthero__container">
        <div className="firstHero__left" data-aos="fade-right">
          <div className="typed__container">
            {homeBg === true ? (
              <h1 className="firsthero__heading">
                The most advance <br /> AI <span ref={typedRef}></span>
              </h1>
            ) : (
              <h1 className="firsthero__heading">{title}</h1>
            )}
          </div>

          <h5 className="text">{description}</h5>

          {/* <div className="firsthero__img">
            <img src={FirstHeroImage} alt="" />
          </div> */}
          <div className="firstHero__btn">
            <button className="nav__btn">Get started free</button>
            <small>No credit card required</small>
          </div>
        </div>

        <div className="firstHero__video" data-aos="fade-left">
          <Lottie
            className="lottie__hero"
            animationData={AIAUDITS}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstHeroSection;
