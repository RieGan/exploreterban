import { connect } from "frontity";
import React from "react";
import { formatProductData } from "../helpers";
import PostPreview from "./post-preview";

const ArchiveItem = ({ item }) => {
  const data = formatProductData(item);
  // Property
  // data = {
  //   id,
  //   owner,
  //   publishDate,
  //   product_name,
  //   product_price,
  //   link,
  //   location,
  //   featured_media{
  //     id,
  //     alt,
  //     src,
  //     srcSet,
  //   },
  //   product_description,
  // }
  return <PostPreview data={data} />;
};

export default connect(ArchiveItem);
