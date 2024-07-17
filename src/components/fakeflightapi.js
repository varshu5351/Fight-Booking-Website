import React, { useEffect, useState } from "react";
import "./fakeapi.css"; // For basic styling
import SearchBar from "./fakesearchbar"; // Import the SearchBar component

function FakeApp() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetching airline data on component mount
    fetch("https://freetestapi.com/api/v1/airlines")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setFilteredFlights(data); // Initial population of flights and filtered flights
      });
  }, []);

  const handleSearch = (searchTerm) => {
    // Filtering flights based on search term
    const filtered = flights.filter((flight) =>
      flight.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFlights(filtered); // Updating filtered flights

    // Generating suggestions based on search term
    const suggestionList = flights
      .filter((flight) =>
        flight.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((flight) => flight.name);

    setSuggestions(suggestionList.slice(0, 5)); // Limiting suggestions to top 5
  };

  return (
    <div className="App">
      <h1 style={{fontFamily:"cursive"}}>Search Flight Details</h1>
      <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      <div className="flight-list">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="flight-item">
              {/* <h2>{flight.name}</h2>
              <p>ID: {flight.id}</p> */}
            </div>
          ))
        ) : (
          <p>No flights found</p>
        )}
      </div>
    </div>
  );
}

export default FakeApp;
