import './index.scss'
import Header from './components/header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/allProducts';
import Catering from './components/Catering';
import About from './components/About';
import Cafe from './components/Cafe'
import Contact from './components/contactus';
import Footer from './components/footer';

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
        <Footer/>
      </BrowserRouter>
    




  )
}

export default App
