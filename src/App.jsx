import Header from "./Components/Header";
import About from "./Components/About";
import ContactCard from "./Components/ContactCard";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //this are some hookers
  const [mode, setMode] = useState("light");
  const [modeName, setModeName] = useState("Dark Mode");

  // end of hookers

  // function utilizing hookers
  const Toggle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "gray";
      setMode("dark");
      setModeName("Light Mode");
    } else {
      setMode("light");
      setModeName("Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  // end of functions
  return (
    <>
      <Router>
        <Header
          modeName={modeName}
          mode={mode}
          title="TextUtils"
          Toggle={Toggle}
        />
    <ContactCard mode={mode} />
        <Routes>
          <Route exact path="/" element={<ContactCard mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
