import React from "react";
import Card1 from "./components/Card1"
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

function App() {
  

  return (
    <>
        <Navbar/>

<Routes>
<Route path="/" element={<Card1 />} />
<Route path="card2" element={<Card2 />} />
<Route path="card3" element={<Card3 />} />

</Routes>
      </>
  );
}

export default App;

