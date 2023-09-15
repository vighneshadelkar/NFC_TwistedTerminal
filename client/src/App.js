import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import Aos from "aos"
import Home from "./pages/Home/Home";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
