import React from "react";
import Container from "react-bootstrap/esm/Container";
import { CiLocationArrow1 } from "react-icons/ci";

const Work = () => {
  return (
    <Container className="container p-md-5 mt-5 d-flex flex-column justify-content-center">
      <h1 className="text-center">Featured projects</h1>

      <div className="w-50 mt-5 pt-5">
        <a className="text-white text-decoration-none" href="">
          <h6
            onClick={() => {
              window.open(
                "https://finance-tracker-jet-rho.vercel.app/",
                "_blank"
              );
            }}
          >
            FinanceTracker.com <CiLocationArrow1 />
          </h6>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod placeat
          hic fugit quis. Ullam deserunt sequi neque ad fuga, blanditiis quos
          est earum atque dolorem! Tempore aspernatur quos aliquam eveniet
          quaerat accusantiumt.
        </p>
      </div>

      <div className="">
        <video height={500} width={1000} autoPlay loop muted>
          <source src="financeTracker.mp4" type="video/mp4" allowFullScreen />
        </video>
      </div>

      <div className="w-50 mt-5 pt-5">
        <a className="text-white text-decoration-none" href="">
          <h6>
            FinanceTracker.com <CiLocationArrow1 />
          </h6>
        </a>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod placeat
          hic fugit quis. Ullam deserunt sequi neque ad fuga, blanditiis quos
          est earum atque dolorem! Tempore aspernatur quos aliquam eveniet
          quaerat accusantiumt.
        </p>
      </div>

      <video autoPlay loop muted>
        <source src="financeTracker.mp4" type="video/mp4" allowFullScreen />
      </video>
    </Container>
  );
};

export default Work;
