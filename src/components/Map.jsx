import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useCallback} from "react";

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -19.1601483,
  lng: -47.6752635
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCwLHHw9LKuO4QjkKw3cZ84S0NbBpG44DM",
  });

  const lines = [
    {lat:-19.16023060327673, lng:-47.67534142837298},
    center
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
