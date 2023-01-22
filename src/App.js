import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Demo from './components/Demo';
import Home from './components/Home';

function App() {
  return (
    
    <>
      {/* <h1 >Hello, World! </h1> */}
      <Navbar></Navbar>

      

      {/* <Home></Home>   */}

      <BrowserRouter>
      <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/explore" element={<Explore />} />
        
      </Routes>
    </BrowserRouter>
      


    </>
  );
}

export default App;
