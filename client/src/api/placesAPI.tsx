// import { PlacesData } from "../interfaces/PlacesData";
// import { ApiMessage } from "../interfaces/ApiMessage";

// const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${AIzaSyAuw3y8Feor-ZLpY2zyY26jxhR_arjqXtA}`;
// console.log("test");
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(JSON.stringify(data, null, 2)))
//   .catch(error => console.error("Error fetching data:", error));

const lat = 37.7749; // Example latitude
console.log(lat);
const lng = -122.4194; // Example longitude
console.log(lng);
const radius = 1500; // Example radius in meters
const type = 'restaurant'; // Example place type
const apiKey = 'AIzaSyAuw3y8Feor-ZLpY2zyY26jxhR_arjqXtA'; // Use environment variable for API key


if (!apiKey) {
    console.error("API key is missing. Please set REACT_APP_GOOGLE_MAPS_API_KEY in your .env file.");
  } else {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;
    console.log("URL:", url); // Log the URL to ensure it's correct
    fetch(url)
      .then(response => {
        console.log("Response status:", response.status); // Log the response status
        return response.json();
      })
      .then(data => {
        console.log("Data received:", JSON.stringify(data, null, 2)); // Log the received data
      })
      .catch(error => {
        console.error("Error fetching data:", error); // Log any errors
      });
  }