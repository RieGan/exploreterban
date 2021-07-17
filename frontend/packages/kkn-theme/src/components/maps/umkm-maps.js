import React, { useState, useCallback } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import { connect } from "frontity";
import umkmPoint from "../../../../../datasets/umkm-point.json";
import umkmBoundary from "../../../../../datasets/umkm-boundary.json";
import Legends from "./legends";
import Pins from "./umkm-pin";
import Info from "./umkm-info";

const boundaryStyle = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "#630830",
    "fill-opacity": 0.2,
  },
};

const UMKMMap = ({ state }) => {
  const [popupInfo, setPopupInfo] = useState(null);
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
      <Source id="umkm-boundary" type="geojson" data={umkmBoundary}>
        <Layer {...boundaryStyle} />
      </Source>
      <Pins data={umkmPoint} onClick={setPopupInfo} />

      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.geometry.coordinates[0]}
          latitude={popupInfo.geometry.coordinates[1]}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <Info info={popupInfo} />
        </Popup>
      )}

      <Legends />
    </ReactMapGL>
  );
};

export default connect(UMKMMap);
