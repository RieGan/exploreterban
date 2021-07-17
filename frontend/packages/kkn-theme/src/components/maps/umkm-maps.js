import React, { useState, useEffect } from "react";
import MapGL, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { connect } from "frontity";
import umkmPoint from "../../../../../datasets/umkm-point.json";
import umkmBoundary from "../../../../../datasets/umkm-boundary.json";
import Legends from "./legends";
import Pins from "./umkm-pin";
import Info from "./umkm-info";

// Icons
import { HiLocationMarker } from "react-icons/hi";

const boundaryStyle = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "#630830",
    "fill-opacity": 0.2,
  },
};

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

const UMKMMap = ({ state }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: state.mapbox.longitude,
    latitude: state.mapbox.latitude,
    zoom: state.mapbox.zoom,
  });
  const [layerVisibility, setLayerVisibility] = useState({
    "umkm-boundary": {
      name: "Batas Wilayah",
      visible: true,
    },
    "umkm-point": {
      name: "UMKM",
      visible: true,
    },
  });

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={state.mapbox.mapboxAccessToken}
      >
        {/* Layers */}
        {layerVisibility["umkm-boundary"].visible ? (
          <Source id="umkm-boundary" type="geojson" data={umkmBoundary}>
            <Layer {...boundaryStyle} />
          </Source>
        ) : (
          <></>
        )}
        {layerVisibility["umkm-point"].visible ? (
          <Pins data={umkmPoint} onClick={setPopupInfo} size={25}>
            <HiLocationMarker color="#B81E24" size={25} />
          </Pins>
        ) : (
          <></>
        )}

        {/* Popup info umkm-point */}
        {popupInfo && (
          <Popup
            tipSize={10}
            anchor="top"
            longitude={popupInfo.geometry.coordinates[0]}
            latitude={popupInfo.geometry.coordinates[1]}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <Info info={popupInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
      <Legends
        layerVisibility={layerVisibility}
        setLayerVisibility={setLayerVisibility}
      />
    </>
  );
};

export default connect(UMKMMap);
