import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <>
      <div className="wrapper">
        {/* <div className="firstLook d-flex-c-a">
          <div>IshworKarki.com</div>
        </div> */}
        <div className="container bg-black text-light">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
