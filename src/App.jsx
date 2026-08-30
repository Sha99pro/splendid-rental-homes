import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import LandlordLogin from "./components/Pages/Login/LandlordLogin/LandlordLogin";
import TenantLogin from "./components/Pages/Login/TenantLogin/TenantLogin";
import Signup from "./components/Pages/Signup/Signup";
import Properties from "./components/Pages/Properties/Properties";
import LandlordDashboard from "./components/Pages/Dashboard/LandlordDashboard/LandlordDashboard";
import AddProperty from "./components/Pages/Dashboard/Add Property/AddProperty";
import TenantDashboard from "./components/Pages/Dashboard/TenantDashboard/TenantDashboard";
import PropertyDetails from "./components/Pages/PropertyDetails/PropertyDetails";
import ApplicationForm from "./components/Pages/Applications/ApplicationForm/ApplicationForm";
import ApplicationDetails from "./components/Pages/Applications/ApplicationDetails";
import ScheduleATour from "./components/Pages/ScheduleATour/ScheduleATour";
import TourConfirmation from "./components/Pages/TourConfirmation/TourConfirmation";
import LandlordUpdatePropertyView from "./components/Pages/Dashboard/LandlordDashboard/LandlordUpdatePropertyView";
import Contact from "./components/Pages/Contact/Contact";
import HowItWorks from "./components/Pages/HowItWorks/HowItWorks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landlord-login" element={<LandlordLogin />} />
          <Route path="/tenant-login" element={<TenantLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/properties/" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/tenant-dashboard" element={<TenantDashboard />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route
            path="/application-details/:id"
            element={<ApplicationDetails />}
          />
          <Route path="/schedule-tour/:id" element={<ScheduleATour />} />
          <Route path="/tour-confirmation" element={<TourConfirmation />} />
          <Route
            path="/landlord-update-property-view/:id"
            element={<LandlordUpdatePropertyView />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/How-it-works" element={<HowItWorks />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
