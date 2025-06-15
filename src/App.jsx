import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAvBar from "./components/NAvBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AttractionDetails from "./components/AttractionDetails";
import RestaurantBooking from "./components/RestaurantBooking";
import HotelBooking from "./components/HotelBooking";
import RestaurantDetail from "./components/RestaurantDetail";
import HotelDetail from "./components/HotelDetail";  
import Booking from "./pages/Booking";                
import attractionData from "./data/attraction_db.json";
import restaurantData from "./data/restaurant_db.json";
import hotelData from "./data/hotel_db.json";
import EmergencyMap from "./components/EmergencyMap"
import TrainSchedule from './components/TrainSchedule';



function App() {
  return (
    <Router>
      <NAvBar />
      <main className="main-content container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover attractions={attractionData} />} />
          <Route path="/attractions/:id" element={<AttractionDetails attractions={attractionData} />} />
          <Route path="/restaurants" element={<RestaurantBooking data={restaurantData} />} />
          <Route path="/hotels" element={<HotelBooking data={hotelData} />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail data={restaurantData} />} />
          <Route path="/hotels/:id" element={<HotelDetail data={hotelData} />} />
          <Route
            path="/bookings"
            element={<Booking restaurantData={restaurantData} hotelData={hotelData} />}
          />
          <Route path="/emergency" element={<EmergencyMap />} />
          <Route path="/trains" element={<TrainSchedule />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
