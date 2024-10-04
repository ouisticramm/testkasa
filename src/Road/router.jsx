import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Error from "../Pages/Error";
import Housing from "../Pages/Housing";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/housing/:id" element={<Housing />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
