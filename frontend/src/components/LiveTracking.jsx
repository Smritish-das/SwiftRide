import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 37.7749, // Fallback to San Francisco if geolocation fails
  lng: -122.4194,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setIsLoading(false);
      return;
    }

    // Function to update position
    const updatePosition = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
      setIsLoading(false);
    };

    // Error handler for geolocation
    const handleError = (err) => {
      console.error("Geolocation error:", err.message);
      setError(`Geolocation error: ${err.message}`);
      setIsLoading(false);
    };

    // Initial position fetch
    navigator.geolocation.getCurrentPosition(updatePosition, handleError);

    // Set up interval for periodic updates every 5 seconds
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(updatePosition, handleError);
    }, 5000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API}>
      <Map
        center={currentPosition}
        zoom={15}
        style={containerStyle}
        mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
        gestureHandling="greedy"
        disableDefaultUI={true}
        scrollwheel={true} // Explicitly enable mouse wheel zooming
      >
        <AdvancedMarker position={currentPosition}>
          <Pin />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default LiveTracking;