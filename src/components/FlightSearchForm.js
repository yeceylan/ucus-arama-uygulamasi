
import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';


const FlightSearchForm = ({ searchParams, onSearchParamsChange, onSearch }) => {
  return (
    <div>
      <div className='container'>
        <label>Departure Airport:</label>
        <input
          type="text"
          value={searchParams.departureAirport}
          onChange={(e) => onSearchParamsChange({ ...searchParams, departureAirport: e.target.value })}
        />
      
        <label>Arrival Airport:</label>
        <input
          type="text"
          value={searchParams.arrivalAirport}
          onChange={(e) => onSearchParamsChange({ ...searchParams, arrivalAirport: e.target.value })}
        />
      </div>
      <div>
        <label>Departure Date:</label>
        <input
          type="date"
          value={searchParams.departureDate}
          onChange={(e) => onSearchParamsChange({ ...searchParams, departureDate: e.target.value })}
        />
      </div>
      <div>
        <label>Return Date:</label>
        <input
          type="date"
          value={searchParams.returnDate}
          onChange={(e) => onSearchParamsChange({ ...searchParams, returnDate: e.target.value })}
          disabled={searchParams.oneWay}
        />
      </div>
      <div>
        <label>One Way:</label>
        <input
          type="checkbox"
          checked={searchParams.oneWay}
          onChange={(e) => onSearchParamsChange({ ...searchParams, oneWay: e.target.checked, returnDate: '' })}
        />
      </div>
      <div>
        <Button onClick={onSearch}>Search Flights</Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
