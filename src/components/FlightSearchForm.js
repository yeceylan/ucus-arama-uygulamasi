import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FlightSearchForm = ({ searchParams, onSearchParamsChange, onSearch }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Kalkış ve Varış Havaalanı</InputGroup.Text>
        <Form.Control
        placeholder="Kalkış Havaalanı"
          aria-label="First name"
          type="text"
          value={searchParams.departureAirport}
          onChange={(e) =>
            onSearchParamsChange({
              ...searchParams,
              departureAirport: e.target.value,
            })
          }
        />
        <Form.Control
        placeholder="Varış Havaalanı"
          aria-label="Last name"
          type="text"
          value={searchParams.arrivalAirport}
          onChange={(e) =>
            onSearchParamsChange({
              ...searchParams,
              arrivalAirport: e.target.value,
            })
          }
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
      <InputGroup.Text>Kalkış ve Varış Tarihleri</InputGroup.Text>
      <Form.Control aria-label="First name" type="date"
          min={new Date().toJSON().slice(0, 10)}
          value={searchParams.departureDate}
          onChange={(e) =>
            onSearchParamsChange({
              ...searchParams,
              departureDate: e.target.value,
            })
          } />
      <Form.Control aria-label="Last name" type="date"
          min={new Date().toJSON().slice(0, 10)}
          value={searchParams.returnDate}
          onChange={(e) =>
            onSearchParamsChange({
              ...searchParams,
              returnDate: e.target.value,
            })
          }
          disabled={searchParams.oneWay}/>
    </InputGroup>
    <div class="d-flex main justify-content-between">
      <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Tek Yön" 
          checked={searchParams.oneWay}
          onChange={(e) =>
            onSearchParamsChange({
              ...searchParams,
              oneWay: e.target.checked,
              returnDate: "",
            })
          }
      /></Form>
      
        <Button onClick={onSearch}>Search Flights</Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
