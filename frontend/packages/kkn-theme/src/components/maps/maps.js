import React, { useState, useCallback } from "react";
import MapGL, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";
import { connect } from "frontity";
import UMKMPoint from "../../../../../datasets/umkm-point.json";
import WisataPoint from "../../../../../datasets/wisata-point.json";
import Boundary from "../../../../../datasets/boundary.json";
import Legends from "./legends";
import Pins from "./pins";
import UMKMInfo from "./umkm-info";

// Icons
import { AiTwotoneShop } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { GiMountains } from "react-icons/gi";

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

const Maps = ({ state }) => {
  const [popupUMKMInfo, setPopupUMKMInfo] = useState(null);
  const [popupWisataInfo, setPopupWisataInfo] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: state.mapbox.longitude,
    latitude: state.mapbox.latitude,
    zoom: state.mapbox.zoom,
  });
  const [layerVisibility, setLayerVisibility] = useState({
    boundary: {
      name: "Batas Wilayah",
      visible: true,
      marker: <BsFillCircleFill color="#630830" size={20} />,
    },
    "umkm-point": {
      name: "UMKM",
      visible: true,
      marker: <AiTwotoneShop color="#B81E24" size={20} />,
    },
    "wisata-point": {
      name: "Wisata",
      visible: true,
      marker: <GiMountains color="#20639B" size={20} />,
    },
  });

  const changeUMKMPointLocation = useCallback((loc) => {
    setPopupUMKMInfo(loc);
    setViewport({
      longitude: loc.geometry.coordinates[0],
      latitude: loc.geometry.coordinates[1] - 0.0025,
      zoom: 16,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  const changeWisataPointLocation = useCallback((loc) => {
    setPopupWisataInfo(loc);
    setViewport({
      longitude: loc.geometry.coordinates[0],
      latitude: loc.geometry.coordinates[1] - 0.0025,
      zoom: 16,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={state.mapbox.style}
        onViewportChange={setViewport}
        mapboxApiAccessToken={state.mapbox.mapboxAccessToken}
      >
        {/* Layers */}
        {layerVisibility["boundary"].visible ? (
          <Source id="boundary" type="geojson" data={Boundary}>
            <Layer {...boundaryStyle} />
          </Source>
        ) : (
          <></>
        )}
        {layerVisibility["umkm-point"].visible ? (
          <Pins data={UMKMPoint} onClick={changeUMKMPointLocation} size={25}>
            <AiTwotoneShop color="#B81E24" size={25} />
          </Pins>
        ) : (
          <></>
        )}
        {layerVisibility["wisata-point"].visible ? (
          <Pins
            data={WisataPoint}
            onClick={changeWisataPointLocation}
            size={25}
          >
            <GiMountains color="#20639B" size={25} />
          </Pins>
        ) : (
          <></>
        )}

        {/* Popup info umkm-point */}
        {popupUMKMInfo && (
          <Popup
            tipSize={10}
            anchor="top"
            longitude={popupUMKMInfo.geometry.coordinates[0]}
            latitude={popupUMKMInfo.geometry.coordinates[1]}
            closeOnClick={false}
            onClose={setPopupUMKMInfo}
          >
            <UMKMInfo info={popupUMKMInfo} />
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

export default connect(Maps);
