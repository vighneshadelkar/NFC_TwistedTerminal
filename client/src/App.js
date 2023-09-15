import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import Aos from "aos"

function App() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
      {/* <Route exact path="/profile" element={<Login />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
