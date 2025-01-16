import React from "react";
import ArIndonesiaMapTourImg from "../../assets/ArIndonesiaMapTour.png";
import DroneChecklistImg from "../../assets/DroneChecklist.jpg";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div>
            <img src={DroneChecklistImg} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Drone Checklist Program</h3>
          </div>

          <div className="portfolio__software">
            <span className="portfolio__software-name">Android Studio</span>
            <span className="portfolio__software-name">Java</span>
            <span className="portfolio__software-name">SQLite</span>
            <span className="portfolio__software-name">PHP</span>
          </div>

          <a
            href="https://www.canva.com/design/DAF5bm5WmfQ/mq4WH13Gme-nwz0IgW96jg/edit?utm_content=DAF5bm5WmfQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            <span className="portfolio__button">
              View More{" "}
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </a>
        </div>

        <div className="portfolio__content">
          <div>
            <img
              src={ArIndonesiaMapTourImg}
              alt=""
              className="portfolio__img"
            />
            <h3 className="portfolio__title">AR Indonesia Map Tour</h3>
          </div>

          <div className="portfolio__software">
            <span className="portfolio__software-name">Unity</span>
          </div>

          <a
            href="https://drive.google.com/file/d/1BT4DisX41Qc7T6ufBfxULMOgZhIEC3w3/view?usp=sharing"
            target="_blank"
          >
            <span className="portfolio__button">
              View More{" "}
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
