import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/RestaurantDetail.css';

export default function RestaurantDetail({ data }) {
  const { id } = useParams();
  const restaurant = data.find(r => r.id === id);

  const [booking, setBooking] = useState({
    name: '',
    date: '',
    time: '',
    people: 1,
    specialRequest: ''
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed at ${restaurant.name} for ${booking.people} people on ${booking.date} at ${booking.time}.`);
  };

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="container py-5">
      <h2>{restaurant.name}</h2>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h4 className="card-title">Restaurant Info</h4>
            <p><strong>Address:</strong> {restaurant.address}</p>
            <p><strong>Area:</strong> {restaurant.area}</p>
            <p><strong>Food Type:</strong> {restaurant.food}</p>
            <p><strong>Phone:</strong> {restaurant.phone}</p>
            <p><strong>Postcode:</strong> {restaurant.postcode}</p>
            <p><strong>Price Range:</strong> {restaurant.pricerange}</p>
            {restaurant.signature && <p><strong>Signature Dish:</strong> {restaurant.signature}</p>}
            {restaurant.introduction && <p className="intro"><strong>About:</strong> {restaurant.introduction}</p>}
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h4 className="card-title">Book a Table</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" name="name" value={booking.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" name="date" value={booking.date} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" name="time" value={booking.time} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Number of People</label>
                <input type="number" className="form-control" name="people" min="1" value={booking.people} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Special Request</label>
                <input type="text" className="form-control" name="specialRequest" value={booking.specialRequest} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
