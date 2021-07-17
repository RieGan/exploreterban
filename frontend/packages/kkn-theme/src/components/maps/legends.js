import React, { memo } from "react";
import { styled } from "frontity";

const StyleControls = (props) => {
  return (
    <Legends>
      <h3>Marker, Popup, NavigationControl and FullscreenControl </h3>
      <p>
        Map showing top 20 most populated cities of the United States. Click on
        a marker to learn more.
      </p>
      <p>
        Data source:{" "}
        <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population">
          Wikipedia
        </a>
      </p>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/6.1-release/examples/controls"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
    </Legends>
  );
};

const Legends = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 320px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin: 20px;
  font-size: 13px;
  line-height: 2;
  color: #6b6b76;
  text-transform: uppercase;
  outline: none;
`;

export default memo(StyleControls);
