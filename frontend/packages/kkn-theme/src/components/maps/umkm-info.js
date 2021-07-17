import React, { memo } from "react";
import { styled } from "frontity";

const CityInfo = (props) => {
  const { name, address, phone, product } = props.info.properties;
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
        src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
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
