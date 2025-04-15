import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Work from "./components/Work.jsx";
import Home from "./components/Home.jsx";
import { GoChevronUp } from "react-icons/go";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MyBlogs from "./components/MyBlogs.jsx";
function App() {
   const [ContactModalShow, setContactModalShow] = React.useState(false);

    const [showGoTop, setShowGoTop] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);s
      }
    };

    // Add scroll event listener
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <>
      <div className="wrapper bg-black" style={{ paddingTop: "70px" }}>
        <div className="firstLook d-flex-c-a">
          <div>Welcome to IshworKarki.com</div>
        </div>

        <div className="container bg-black text-light">
          <div className="d-flex gap-3 flex-column logo-container ">
            <img
              src="/git.png"
              alt="git"
              onClick={() =>
                window.open("https://github.com/ishworj", "_blank")
              }
            />
            <img
              src="/linked.png"
              alt="linked"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ishwor-karki-4b3973272/",
                  "_blank"
                )
              }
            />
            <a href="mailto:ishworkarkij11@gmail.com">
              <img src="/email.png" alt="email" />
            </a>
          </div>

          {showGoTop && (
            <div className="goToTop">
              <a onClick={scrollToTop}>
                {" "}
                <GoChevronUp />
              </a>
            </div>
          )}
          <Header />
          <Routes>
            <Route
              path="*"
              element={
                <Home
                  ContactModalShow={ContactModalShow}
                  setContactModalShow={setContactModalShow}
                />
              }
            />
            <Route path="/work" element={<Work />} />
            <Route path="/blogs" element={<MyBlogs />} />
          </Routes>
          <Footer setContactModalShow={setContactModalShow} />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
