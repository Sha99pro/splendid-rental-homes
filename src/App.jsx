import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import LandlordLogin from "./components/Pages/Login/LandlordLogin";
import TenantLogin from "./components/Pages/Login/TenantLogin";
import Signup from "./components/Pages/Signup/Signup";
import Properties from "./components/Pages/Properties/Properties";


function App() {
  

  return (
    <>
    <div>
  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/landlord-login" element={<LandlordLogin/>}/>
        <Route path="/tenant-login"  element={<TenantLogin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/properties" element={<Properties/>}/>

      </Routes>


      <Footer/>
    </div>
    </>
  )
}

export default App;
