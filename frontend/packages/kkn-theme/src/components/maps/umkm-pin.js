import React, { memo } from "react";
import { Marker } from "react-map-gl";

// Important for perf: the markers never change, avoid rerender when the map viewport changes
const Pins = (props) => {
  const { data, onClick, size } = props;

  return data.features.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.geometry.coordinates[0]}
      latitude={city.geometry.coordinates[1]}
    >
      <div
        height={size}
        viewBox="0 0 24 24"
        style={{
          cursor: "pointer",
          stroke: "none",
          transform: `translate(${-size / 2}px,${-size}px)`,
        }}
        onClick={() => onClick(city)}
      >
        {props.children}
      </div>
    </Marker>
  ));
};

export default memo(Pins);
