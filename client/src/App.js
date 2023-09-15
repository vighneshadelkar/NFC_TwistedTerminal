import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import Aos from "aos"
import Home from "./pages/Home/Home";
import Pg2 from "./pages/Diseasepg/Pg2";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/AuthContext";
import Signup from "./pages/Login/Signup";
import Education from "./pages/Education/Education";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);


  const [AuthUser, setAuthUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const userMemo = useMemo(() => ({ AuthUser, setAuthUser, isLoggedIn, setisLoggedIn }), [AuthUser, setAuthUser, isLoggedIn, setisLoggedIn]);

  return (
    <div className="App">
      <AuthContext.Provider value={userMemo}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/dis" element={<Pg2 />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/edu" element={<Education />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>

  );
}

export default App;
