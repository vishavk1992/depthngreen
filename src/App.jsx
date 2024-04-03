import './App.css'
import Header from './component/pages/header'
import Home from './component/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './component/pages/Products';
import Catering from './component/pages/Catering';
import About from './component/pages/About';
import Cafe from './component/pages/Cafe'
import Contact from './component/pages/contactus';
function App() {


  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cafe" element={<Cafe />}></Route>
          <Route path="/catering" element={<Catering />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    




  )
}

export default App
