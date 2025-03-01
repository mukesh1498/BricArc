import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ServicesPage from "./component/ServicePage";
import Contact from "./component/Contact";

function App() {
  return (
    <Router>
      {/* <Navbar ///> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
