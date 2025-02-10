import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pet from "./components/Pet/Pet";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/pet" element={<Pet/>} />
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Navbar/>
    <Pet/> */}
      {/* <ShopCard {...a}/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
