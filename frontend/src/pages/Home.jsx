import React from "react";
import heroImg from "../assets/hero-img.svg";
import heroImg2 from "../assets/heroImg2.png";
import heroImg3 from "../assets/heroImg3.png";
import "../App.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <main>
        <div className="container d-flex d-sm-flex flex-column flex-md-row gap-5 gap-md-0 justify-content-between container px-2 py-5">
          <div className="container d-flex gap-3 flex-column col-sm-5 col-lg-5">
            <h1 id="manage" className="fs-sm lh-sm">
              Manage your task on{" "}
              <span style={{ color: "#980cff" }}>TaskDuty</span>
            </h1>

            <div className="">
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et,
                at platea tempus duis non eget. Hendrerit tortor fermentum
                bibendum mi nisl semper porttitor. Nec accumsan
              </p>
            </div>

            <div>
              <Link to="/tasks">
                <button type="button" id="gototasks" className="btn">
                  Go to My Tasks
                </button>
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <Carousel
            interval={5000}
            fade
            prevIcon={null}
            nextIcon={null}
            className="container"
          >
            <Carousel.Item className="text-end">
              <img src={heroImg} alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item className="text-end">
              <img src={heroImg2} alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item className="text-end">
              <img src={heroImg3} alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
    </>
  );
};
export default Home;
