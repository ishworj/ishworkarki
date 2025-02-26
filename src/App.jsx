import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Work from "./components/Work.jsx";
import Home from "./components/home.jsx";
function App() {
  return (
    <>
      <div className="wrapper bg-black">
        <div className="firstLook d-flex-c-a">
          <div>IshworKarki.com</div>
        </div>
        <div className="container bg-black text-light">
          <Header />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
