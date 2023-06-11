"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { getUserLocation, Location } from "../helpers/getUserLocation";
import Map from "./Map";
import PlacesAutocomplete from "./PlaceAutocomplete";

let service: google.maps.places.PlacesService;

const ShopsMap = () => {
  const defaultCenter = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [center, setCenter] = useState(defaultCenter);
  const [coords, setCoordPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [selected, setSelected] = useState<Location | null>(null);

  useEffect(() => {
    getUserLocation()
      .then((userLocation) => setCenter(userLocation as Location))
      .catch(() => {
        console.log("location blocked");
      });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!window.google) {
      return;
    }

    const request = {
      location: center,
      radius: 12000,
      type: "restaurant",
    };

    service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(request, (results, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        results !== null &&
        results !== undefined
      ) {
        setCoordPlaces(results);
      }
    });
  }, [center]);

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <div className="w-full h-full relative">
      <PlacesAutocomplete setSelected={setSelected} places={coords} />
      <Map center={center} coords={selected} />
    </div>
  );
};

export default ShopsMap;
