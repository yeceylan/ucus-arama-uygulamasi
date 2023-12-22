
import React, { useState } from 'react';

const FlightList = ({ flights }) => {
  const [sortBy, setSortBy] = useState(null); // Varsayılan sıralama kriteri kalkış saati

  const sortedFlights = flights.slice().sort((a, b) => {
    switch (sortBy) {
      case 'departureTime':
        return a.departureDate.localeCompare(b.departureDate);
      case 'returnTime':
        return a.returnDate.localeCompare(b.returnDate);
      case 'duration':
        return a.duration.localeCompare(b.duration);
      case 'price':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div>
        <label>Sırala:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="departureTime">Kalkış Saati</option>
          <option value="returnTime">Dönüş Saati</option>
          <option value="duration">Uçuş Uzunluğu</option>
          <option value="price">Fiyat</option>
        </select>
      </div>
      <ul>
        {sortedFlights.map((flight) => (
          <li key={flight.id}>
            <div>Havayolu: {flight.airline}</div>
            <div>{flight.departureAirport} to {flight.arrivalAirport}</div>
            <div>Kalkış: {flight.departureDate}</div>
            <div>Dönüş: {flight.returnDate}</div>
            <div>Uçuş Uzunluğu: {flight.duration}</div>
            <div>Fiyat: {flight.price} USD</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
