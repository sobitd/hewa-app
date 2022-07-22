import React from "react";
import NavbarComponent from "./NavbarComponent";
import LocationCard from "./LocationCard";
import FullWeek from "./FullWeek";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LocationCard />
      <FullWeek />
    </div>
  );
}

export default App;
