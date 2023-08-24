import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFeedback from "./pages/AddFeedback";
import Joinus from './pages/Join';
import Quize from './pages/Quize';



function App(){
  return(
      <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/AddFeedback" element={<AddFeedback />} />
          <Route path="/Joinus" element={<Joinus />} />
          <Route path="/Quize" element={<Quize />} />
        
          </Routes>
          </div>
          </BrowserRouter>
      </div>
  )
}
export default App;