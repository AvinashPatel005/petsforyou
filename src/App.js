import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pet from "./components/Pet/Pet";
import Home from "./components/Home/Home";
import Rating from "./components/Pet/Rating";
import ShopCard from "./components/Pet/ShopCard";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  const a = {
    id: "1",
    name: "Happy Paws Pet Shop",
    type: "petshop",
    location: {
      latitude: 20.2961,
      longitude: 85.8245,
      address: "Jaydev Vihar, Nayapalli",
      postal_code: "751013",
      city: "Bhubaneswar",
      state: "Odisha",
      country: "India",
    },
    contact: {
      phone: "+918765432100",
      email: "contact@happypaws.com",
      website: "https://www.happypaws.com",
    },
    services: ["grooming", "pet supplies", "boarding"],
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed",
    },
    ratings: {
      average: 4.7,
      total_reviews: 150,
    },
    features: {
      pet_friendly: true,
      wheelchair_accessible: true,
      parking_available: true,
      delivery_services: true,
    },
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    reviews: [
      {
        reviewer: "Arjun Das",
        rating: 5,
        comment: "Amazing variety and friendly staff!",
        date: "2024-12-01",
      },
      {
        reviewer: "Neha Singh",
        rating: 4,
        comment: "Affordable pricing on pet supplies.",
        date: "2024-11-20",
      },
    ],
  };
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
          <Route path="/pet" element={<Pet />} />
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
