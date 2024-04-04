import './App.css'
import Header from './components/header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Catering from './components/Catering';
import About from './components/About';
import Cafe from './components/Cafe'
import Contact from './components/contactus';
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
