import React, { useEffect, useMemo, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { getUserLocation, Location } from "../helpers/getUserLocation";
import Map from "./Map";

let service: google.maps.places.PlacesService;

const ShopsMap = () => {
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
    <div className="w-full h-full">
      <input type="text" name='search' placeholder="Search" className="border-black w-54 bg-slate-200 rounded-md h-10 m-2 p-4 text-xl" />
      <Map center={center} coords={coords} />
    </div>
  );
};

export default ShopsMap;
