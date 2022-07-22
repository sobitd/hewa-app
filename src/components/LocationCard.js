import React from "react";
import Card from "react-bootstrap/Card";

function LocationCard() {
  return (
    <Card
      style={{ width: "80vw", margin: "2rem auto", height:"auto", padding: "2rem" }}
    >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Img
        //   style={{ width: "50vw", height: "60vh", padding: "2rem" }}
          src={process.env.PUBLIC_URL + "weather.png"}
          alt="img"
        />
        <Card.Text>Weather App coming soon!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
