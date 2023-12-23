// src/mockData.js
export const getMockFlights = () => {
    return [
      { id: 1, airline: 'Example Airlines', departureAirport: 'Airport A', arrivalAirport: 'Airport B', departureDate: '2024-01-01', returnDate: '2024-01-05', duration: '5h', price: 200, oneWay:false },
      { id: 2, airline: 'Sample Airways', departureAirport: 'Airport C', arrivalAirport: 'Airport D', departureDate: '2024-01-02', returnDate: '', duration: '3h', price: 250,oneWay:true },
      { id: 3, airline: 'Exra Airways', departureAirport: 'Airport D', arrivalAirport: 'Airport A', departureDate: '2024-12-12', returnDate: '2024-12-12', duration: '10h', price: 150,oneWay:false },
      { id: 4, airline: 'Fast Airways', departureAirport: 'Airport B', arrivalAirport: 'Airport F', departureDate: '2024-07-05', returnDate: '2024-07-25', duration: '2h', price: 50,oneWay:false },
      { id: 5, airline: 'Safe Airways', departureAirport: 'Airport C', arrivalAirport: 'Airport A', departureDate: '2024-01-24', returnDate: '', duration: '7h', price: 280,oneWay:true },
      { id: 6, airline: 'Cheap Airways', departureAirport: 'Airport D', arrivalAirport: 'Airport C', departureDate: '2024-11-24', returnDate: '', duration: '1h', price: 275,oneWay:true },
      { id: 7, airline: 'Nice Airlines', departureAirport: 'Airport F', arrivalAirport: 'Airport B', departureDate: '2024-09-10', returnDate: '2024-09-20', duration: '12h', price: 450,oneWay:false },
      { id: 8, airline: 'One More Airlines', departureAirport: 'Airport C', arrivalAirport: 'Airport F', departureDate: '2024-07-03', returnDate: '2024-07-12', duration: '6h', price: 350,oneWay:false }

    ];
  };
  