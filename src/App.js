
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import FlightSearchForm from "./components/FlightSearchForm";
import FlightList from "./components/FlightList";
import LoadingIndicator from "./components/LoadingIndicator";
import { getMockFlights } from "./assets/mock";
import "bootstrap/dist/css/bootstrap.min.css";
import  Header  from "./components/Header";

const mockAPI = {
  searchFlights: (searchParams) => {
    return new Promise((resolve) => {
      // Mock API isteğini gerçekleştirirken bir süre bekleyelim.
      setTimeout(() => {
        const filteredFlights = getMockFlights().filter((flight) => {
          if (searchParams.oneWay === true) {
            return (
              flight.departureAirport
                .toLowerCase()
                .includes(searchParams.departureAirport.toLowerCase()) &&
              flight.arrivalAirport
                .toLowerCase()
                .includes(searchParams.arrivalAirport.toLowerCase()) &&
              flight.departureDate.includes(searchParams.departureDate) &&
              !searchParams.returnDate &&
              flight.oneWay === true
            );
          } else {
            return (
              flight.departureAirport
                .toLowerCase()
                .includes(searchParams.departureAirport.toLowerCase()) &&
              flight.arrivalAirport
                .toLowerCase()
                .includes(searchParams.arrivalAirport.toLowerCase()) &&
              flight.departureDate.includes(searchParams.departureDate) &&
              (!searchParams.returnDate ||
                flight.returnDate.includes(searchParams.returnDate))
            );
          }
        });
        resolve(filteredFlights);
      }, 1000);
    });
  },
};

const App = () => {
  const [searchParams, setSearchParams] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    oneWay: false,
  });

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(() => {
    setLoading(true);
    mockAPI
      .searchFlights(searchParams)
      .then((data) => {
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div className="App">
      <Header/>
      <FlightSearchForm
        searchParams={searchParams}
        onSearchParamsChange={(newSearchParams) =>
          setSearchParams(newSearchParams)
        }
        onSearch={handleSearch}
      />
      {loading ? <LoadingIndicator /> : <FlightList flights={flights} />}
    </div>
  );
};

export default App;
