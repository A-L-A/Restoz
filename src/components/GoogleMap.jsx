import React, { useState, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const Map = ({ markers }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA7m8uqYqAwN7r47hs4rJnr7SDo98y0_qw",
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapContainerStyle = {
    width: "100%",
    height: "300px", // Adjust the height as needed
  };

  const mapRef = useRef();
  const bounds = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: markers.length > 0 ? markers[0] : { lat: 0, lng: 0 },
        zoom: 10, // Adjust the zoom level as needed
      });

      bounds.current = new window.google.maps.LatLngBounds();
      markers.forEach(({ lat, lng }) => bounds.current.extend({ lat, lng }));

      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        });
      });

      if (bounds.current) {
        map.fitBounds(bounds.current);
        const listener = window.google.maps.event.addListenerOnce(
          map,
          "idle",
          () => {
            if (map.getZoom() > 16) map.setZoom(16);
          }
        );
        return () => {
          window.google.maps.event.removeListener(listener);
        };
      }
    }
  }, [isLoaded, markers]);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const handleRedirect = (lat, lng) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={mapRef} style={mapContainerStyle} />
      {selectedMarker && (
        <div style={{ position: "absolute", zIndex: 1 }}>
          <InfoWindow
            position={{
              lat: selectedMarker.lat,
              lng: selectedMarker.lng,
            }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              <p
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleRedirect(selectedMarker.lat, selectedMarker.lng)
                }
              >
                {"Go to Location >>"}
              </p>
            </div>
          </InfoWindow>
        </div>
      )}
    </div>
  );
};

export default Map;
