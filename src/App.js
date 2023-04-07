import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import Navbar1 from "./components/Navbar1";
// import Home from "./components/Home";

// import React from "react";
// import { 
//   BrowserRouter, Route, Routes 
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [usetext, setText] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("primary");
      setText("white");
      document.body.style.backgroundColor = "blue";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Home - Dark Mode Enabled";
    } else {
      setmode("dark");
      setText("white");
      document.title = "Home -Light Mode Enabled";
      document.body.style.backgroundColor = "black";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Home"
          aboutUs="About Us"
          contactUs="Contect Us "
          home="Home"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <TextForm text="Enter The text " mode={mode} usetext={usetext} />
        

        {/* <Routes> */}

          {/* <Route path="/home" element={<Home/>}/> */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/" element={  }/> */}

        {/* </Routes> */}

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
