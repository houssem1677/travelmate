import React, { useState } from "react";
import RestaurantBooking from "../components/RestaurantBooking";
import HotelBooking from "../components/HotelBooking";

export default function Booking({ restaurantData, hotelData }) {
  const [view, setView] = useState("restaurant");

  return (
    <div className="container mt-4">
      <div className="mb-4 d-flex justify-content-center gap-3">
        <button
          className={`btn ${view === "restaurant" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("restaurant")}
        >
          Restaurants
        </button>
        <button
          className={`btn ${view === "hotel" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setView("hotel")}
        >
          Hotels
        </button>
      </div>

      {view === "restaurant" ? (
        <RestaurantBooking data={restaurantData} />
      ) : (
        <HotelBooking data={hotelData} />
      )}
    </div>
  );
}
