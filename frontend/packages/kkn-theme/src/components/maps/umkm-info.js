import React, { memo } from "react";
import { styled } from "frontity";

const CityInfo = (props) => {
  const { name, address, phone, product, image_url } = props.info.properties;
  return (
    <Container>
      <div style={{ color: "#ECA41A", fontSize: 13 }}>
        <b>{name.toUpperCase()}</b>
      </div>
      <table>
        <tr style={{ verticalAlign: "top" }}>
          <td>
            <b>Alamat:</b>
          </td>
          <td>{address}</td>
        </tr>
        <tr style={{ verticalAlign: "top" }}>
          <td>
            <b>Telepon:</b>
          </td>
          <td>{phone}</td>
        </tr>
        <tr style={{ verticalAlign: "top" }}>
          <td>
            <b>Produk:</b>
          </td>
          <td>{product}</td>
        </tr>
      </table>
      <img
        width={240}
        src={image_url}
        style={{
          display: "block",
          margin: "0 auto",
        }}
      />
    </Container>
  );
};

export default memo(CityInfo);

const Container = styled.div`
  max-width: 320px;
  background: #fff;
  padding: 12px 24px;
  font-size: 11px;
  line-height: 2;
  color: #6b6b76;
  outline: none;
  font-family: Helvetica, Arial, sans-serif;
`;
