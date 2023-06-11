"use client";
import Image from "next/image";
import { useState } from "react";
import MapModal from "./Portal/MapModal";
import ClientOnlyPortal from "./Portal/ClientOnlyPortal";

const MapButton = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  return (
    <>
      {isMapOpen && (
        <ClientOnlyPortal selector="#map">
          <MapModal callback={() => setIsMapOpen(false)} />
        </ClientOnlyPortal>
      )}
      <button
        className="hover:text-slate-600"
        onClick={() => setIsMapOpen(true)}
      >
        <Image
          src="/image/map.png"
          alt="shopping cart"
          className="m-auto"
          width={64}
          height={60}
        />
      </button>
    </>
  );
};

export default MapButton;
