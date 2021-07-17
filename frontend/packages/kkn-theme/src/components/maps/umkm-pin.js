import React, { memo } from "react";
import { Marker } from "react-map-gl";
import { HiLocationMarker } from "react-icons/hi";

const SIZE = 20;
const PICKER_COLOR = "B81E24";

// Important for perf: the markers never change, avoid rerender when the map viewport changes
const Pins = (props) => {
  const { data, onClick } = props;

  return data.features.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.geometry.coordinates[0]}
      latitude={city.geometry.coordinates[1]}
    >
      <div
        height={SIZE}
        viewBox="0 0 24 24"
        style={{
          cursor: "pointer",
          stroke: "none",
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
        }}
        onClick={() => onClick(city)}
      >
        <HiLocationMarker color={PICKER_COLOR} size={SIZE} />
      </div>
    </Marker>
  ));
};

export default memo(Pins);
