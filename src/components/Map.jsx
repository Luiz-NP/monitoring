import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useCallback} from "react";
import dotenv from "dotenv";

dotenv.config();

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -19.20252448,
  lng: -47.69458392,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.API_KEY,
  });

  const lines = [
    center,
    {lat: -19.202343, lng: -47.695112}
  ]

  const onLoad = useCallback((map) => {
    const drawLines = new google.maps.Polyline({
      path: lines,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 5,
    });

    drawLines.setMap(map)
  }, []);
  
  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        onLoad={onLoad}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>;
}

export default Map;
