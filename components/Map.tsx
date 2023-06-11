import React, { useState } from "react";
import { MarkerF, GoogleMap } from "@react-google-maps/api";
type Location = {
  lat: number;
  lng: number;
};

export default function Map(props: {
  center: Location;
  coords: Location|null;
}): JSX.Element {
  const { center, coords } = props;
  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        key={Date.now()}
        mapContainerClassName="w-full h-full rounded-lg mb-8"
        options={{
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        <MarkerF position={center} label={"You"} />
        <MarkerF
          position={coords as Location}
        />
        {/* {coords.map((result: google.maps.places.PlaceResult, i: number) => (
          <MarkerF
            key={i}
            title={result.name}
            position={{
              lat: result.geometry?.location?.lat() as number,
              lng: result.geometry?.location?.lng() as number,
            }}
          />
        ))} */}
      </GoogleMap>
    </>
  );
}
