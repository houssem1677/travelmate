import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/HotelDetail.css'; 

export default function HotelDetail({ data }) {
  const { id } = useParams();
  const hotel = data.find(h => h.id === id);

  const [form, setForm] = useState({
    roomType: '',
    nights: 1,
    guests: 1,
    name: '',
    phone: '',
    checkin: '',
    time: '',
  });

  if (!hotel) return <div className="container mt-5">Hotel not found</div>;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const pricePerNight = hotel.price[form.roomType] || 0;
  const total = pricePerNight * form.nights;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{hotel.name}</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <p><strong>⭐ Stars:</strong> {hotel.stars}</p>
              <p><strong>📍 Address:</strong> {hotel.address}, {hotel.postcode}</p>
              <p><strong>📞 Phone:</strong> {hotel.phone}</p>
              <p><strong>🌐 Internet:</strong> {hotel.internet}</p>
              <p><strong>🅿️ Parking:</strong> {hotel.parking}</p>
              <p><strong>✅ Takes bookings:</strong> {hotel.takesbookings}</p>
              <p><strong>🏷️ Price range:</strong> {hotel.pricerange}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">🛏️ Room Prices</h5>
              <ul className="list-group">
                {hotel.price.double && (
                  <li className="list-group-item">Double Room: £{hotel.price.double}</li>
                )}
                {hotel.price.family && (
                  <li className="list-group-item">Family Room: £{hotel.price.family}</li>
                )}
                {hotel.price.single && (
                  <li className="list-group-item">Single Room: £{hotel.price.single}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📅 Book This Hotel</h5>
              <form>
                <div className="mb-2">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Phone Number</label>
                  <input type="text" name="phone" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Room Type</label>
                  <select name="roomType" className="form-select" onChange={handleChange}>
                    <option value="">Select</option>
                    {hotel.price.double && <option value="double">Double</option>}
                    {hotel.price.family && <option value="family">Family</option>}
                    {hotel.price.single && <option value="single">Single</option>}
                  </select>
                </div>
                <div className="mb-2">
                  <label className="form-label">Nights</label>
                  <input type="number" name="nights" className="form-control" min="1" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <label className="form-label">Check-in Date</label>
                  <input type="date" name="checkin" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                  <strong>Total Price:</strong> £{isNaN(total) ? 0 : total}
                </div>

                <button className="btn btn-primary w-100">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
