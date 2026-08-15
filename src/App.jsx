import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import LandlordLogin from "./components/Pages/Login/LandlordLogin";
import TenantLogin from "./components/Pages/Login/TenantLogin";



function App() {
  

  return (
    <>
  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/landlord-login" element={<LandlordLogin/>}/>
        <Route path="/tenant-login"  element={<TenantLogin/>}/>

      </Routes>


      <Footer/>

    </>
  )
}

export default App;
