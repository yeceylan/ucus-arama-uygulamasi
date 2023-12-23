import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Icon from "../assets/airplane.png";
import Form from 'react-bootstrap/Form'

const FlightList = ({ flights }) => {
  const [sortBy, setSortBy] = useState(null);

  const sortedFlights = flights.slice().sort((a, b) => {
    switch (sortBy) {
      case "departureTime":
        return a.departureDate.localeCompare(b.departureDate);
      case "returnTime":
        return a.returnDate.localeCompare(b.returnDate);
      case "duration":
        return a.duration.localeCompare(b.duration);
      case "price":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="d-flex  justify-content">
        <label className="m-2">Sırala:</label>
        <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="departureTime">Kalkış Saati</option>
          <option value="returnTime">Dönüş Saati</option>
          <option value="duration">Uçuş Uzunluğu</option>
          <option value="price">Fiyat</option>
        </Form.Select>
      </div>

      {sortedFlights.length > 0 ? (
        <ul>
          {sortedFlights.map((flight) => (
            <li key={flight.id}>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={Icon} />
                <Card.Body>
                  <Card.Title>Havayolu: {flight.airline}</Card.Title>
                  <Card.Text>
                    {flight.departureAirport} to {flight.arrivalAirport}
                  </Card.Text>
                  <Card.Text>Kalkış: {flight.departureDate}</Card.Text>
                  <Card.Text>Dönüş: {flight.returnDate}</Card.Text>
                  <Card.Text>Uçuş Uzunluğu: {flight.duration}</Card.Text>
                  <Card.Text>Fiyat: {flight.price} USD</Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <p>Uçuş bulunamadı.</p>
      )}
    </div>
  );
};

export default FlightList;
