import React, { useEffect, useMemo, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { getUserLocation, Location } from "../helpers/getUserLocation";
import Map from "./Map";

let service: google.maps.places.PlacesService;

export default function ShopsMap() {
  const defaultCenter = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [center, setCenter] = useState(defaultCenter);
  const [coords, setCoordGym] = useState<google.maps.places.PlaceResult[]>([]);

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
        setCoordGym(results);
        console.log(center, results);
      }
    });
  }, [center]);

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <div className="w-96 h-96">
      <h3 className='text-2xl m-4'>See shops location</h3>
      <Map center={center} coords={coords} />
    </div>
  );
}
