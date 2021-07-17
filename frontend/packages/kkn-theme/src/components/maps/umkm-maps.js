import React, { useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { connect } from "frontity";
import "../../styles/mapbox-gl.css";
import umkmPoint from "../../../../../datasets/umkm-point.json";
import umkmBoundary from "../../../../../datasets/umkm-boundary.json";

const pointStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const boundaryStyle = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "#630830",
    "fill-opacity": 0.5,
  },
};

const UMKMMap = ({ state }) => {
  const [viewport, setViewport] = useState({
    longitude: state.mapbox.longitude,
    latitude: state.mapbox.latitude,
    zoom: state.mapbox.zoom,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={state.mapbox.mapboxAccessToken}
    >
      <Source id="umkm-point" type="geojson" data={umkmPoint}>
        <Layer {...pointStyle} />
      </Source>
      <Source id="umkm-boundary" type="geojson" data={umkmBoundary}>
        <Layer {...boundaryStyle} />
      </Source>
    </ReactMapGL>
  );
};

export default connect(UMKMMap);
