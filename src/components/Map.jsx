import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useCallback} from "react";

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -19.7533924,
  lng: -47.9388867
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCwLHHw9LKuO4QjkKw3cZ84S0NbBpG44DM",
  });

  const originalPoints = [
    {lat: -19.7540187, lng: -47.9377438},
    {lat: -19.7539868, lng: -47.9389602},
    {lat: -19.7533924, lng:	-47.9388867},
    {lat: -19.7527813, lng: -47.938812},
    {lat: -19.7528034, lng: -47.9383674},
    {lat: -19.7532617, lng: -47.9375796},
    {lat: -19.7537049, lng: -47.9377468}
  ]

  const lines = [
     { lat: -19.754008841093654, lng: -47.937787928776885 },
  { lat: -19.754023, lng: -47.937791499999996 },
  { lat: -19.754023, lng: -47.937791499999996 },
  { lat: -19.7544196, lng: -47.937884 },
  { lat: -19.7544196, lng: -47.937884 },
  { lat: -19.7553104, lng: -47.9381256 },
  { lat: -19.7553104, lng: -47.9381256 },
  { lat: -19.7550019, lng: -47.93940260000001 },
  { lat: -19.7550019, lng: -47.93940260000001 },
  { lat: -19.754589199999998, lng: -47.9392765 },
  { lat: -19.7541765, lng: -47.93914809999999 },
  { lat: -19.7541765, lng: -47.93914809999999 },
  { lat: -19.754084600000002, lng: -47.939114 },
  { lat: -19.753504, lng: -47.93896029999999 },
  { lat: -19.753382582482082, lng: -47.93892641591986 },
  { lat: -19.752828899999997, lng: -47.9387719 },
  { lat: -19.752828899999997, lng: -47.9387719 },
  { lat: -19.7528495, lng: -47.9385327 },
  { lat: -19.7528495, lng: -47.9385327 },
  { lat: -19.752874163747677, lng: -47.93838033144609 },
  { lat: -19.7530108, lng: -47.9375362 },
  { lat: -19.7530108, lng: -47.9375362 },
  { lat: -19.75325749497777, lng: -47.937598421811046 },
  { lat: -19.753712414926483, lng: -47.93771316298382 }
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
