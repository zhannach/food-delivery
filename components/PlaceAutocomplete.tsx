"use client";

import usePlacesAutocomplete from "use-places-autocomplete";

type Location = {
  lat: number;
  lng: number;
};

type PlacesProps = {
  setSelected: ({ lat, lng }: Location) => void;
  places: google.maps.places.PlaceResult[];
};
const PlacesAutocomplete = ({ setSelected, places }: PlacesProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
      componentRestrictions: { country: "ua" },
    },
    debounce: 300,
  });

  places = places.sort((a, b) => (a.name as string).localeCompare(b.name as string));
  const handleSelect = async ({ name, geometry }: google.maps.places.PlaceResult) => {
    const lat = geometry?.location?.lat() as number;
    const lng = geometry?.location?.lng() as number;
    setValue(name as string, false);
    clearSuggestions();
    setSelected({ lat, lng });
  };

  return (
    <div className="w-96 top-30 z-40 left-0 absolute bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className=" h-8 w-full p-2 text-xl"
        placeholder="Search an address"
      />
      <div className="overflow-y-scroll max-h-52">
        {status === "OK" &&
          places.map(({ name, geometry, place_id, vicinity }:  google.maps.places.PlaceResult) => {
            return (
              <p
                className="h-content my-2 text-black text-base bg-white cursor-pointer p-2"
                key={place_id}
                onClick={() => handleSelect({ name, geometry })}
              >
                {`${name}, ${vicinity}`}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default PlacesAutocomplete;
