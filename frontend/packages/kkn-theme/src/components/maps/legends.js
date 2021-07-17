import React, { memo } from "react";
import { styled } from "frontity";

const Checkbox = ({ keyName, name, value, onChange }) => {
  return (
    <tr key={keyName}>
      <td>
        <label>{name}</label>
      </td>
      <td>
        <input
          style={{ marginLeft: "50px" }}
          type="checkbox"
          checked={value}
          onChange={(evt) => onChange(keyName, evt.target.checked)}
        />
      </td>
    </tr>
  );
};

const StyleControls = (props) => {
  const { layerVisibility, setLayerVisibility } = props;

  const toggleLayer = (keyName, val) => {
    setLayerVisibility({
      ...layerVisibility,
      [keyName]: { name: layerVisibility[keyName].name, visible: val },
    });
  };

  return (
    <Legends>
      <div style={{ color: "#ECA41A", fontSize: 15 }}>
        <b>LEGENDA</b>
      </div>
      <hr></hr>
      <table>
        {Object.keys(layerVisibility).map((key) => (
          <Checkbox
            key={key}
            keyName={key}
            name={layerVisibility[key].name}
            value={layerVisibility[key].visible}
            onChange={toggleLayer}
          />
        ))}
      </table>
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
  // text-transform: uppercase;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
`;

export default memo(StyleControls);
