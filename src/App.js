import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import SideContent from "./components/side/SideContent";
import "./scss/main.scss";

const App = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
          <SideContent />
        </div>
        <main>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
};

export default App;
