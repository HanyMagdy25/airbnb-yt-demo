import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// OAuth 2.0 Client IDs
// Your Calient Id = "732864568293-o2aij00riaj4agsk1fa8s3si12ie9h27.apps.googleusercontent.com"
// Your Calient secret = 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

// API Keys
const apiKeyMapGoogle = "AIzaSyDxYZo2xLqrGMIwFXrUdbzOnKzLEz5anbk";

function MapSection() {
  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{
        lat: 30.089726,
        lng: 31.638698,
      }}
    >
      <Marker name={"Current location"} />

      {/* <InfoWindow>
        <div>
          gggg
        </div>
      </InfoWindow> */}
    </Map>
  );
}

// export default MapSection;
export default GoogleApiWrapper({
  apiKey: apiKeyMapGoogle,
})(MapSection);
