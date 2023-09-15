import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import Aos from "aos"
import Home from "./pages/Home/Home";
import Pg2 from "./pages/Diseasepg/Pg2";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/dis" element={<Pg2/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
