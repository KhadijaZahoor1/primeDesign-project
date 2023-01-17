import "./App.css";
import { Route, Routes } from "react-router-dom";
//import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/pages/Home";
import { SellProperty } from "./Components/pages/SellProperty";
import { PrimeUae } from "./Components/pages/PrimeUae";
import { PropertyInfo } from "./Components/pages/PropertyInfo";
import { Blog } from "./Components/pages/Blog";
import { BlogDetail } from "./Components/pages/BlogDetail";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sellproperty" element={<SellProperty />} />

        <Route path="/primeuae" element={<PrimeUae />} />

        <Route path="/propertyinfo" element={<PropertyInfo />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blogdetail" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
