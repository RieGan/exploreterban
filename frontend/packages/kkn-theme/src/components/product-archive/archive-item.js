import { connect } from "frontity";
import React from "react";
import { formatProductData } from "../helpers";
import PostPreview from "./post-preview";

const ArchiveItem = ({ state, item }) => {
  const data = formatProductData(state, item);
  return <PostPreview data={data} />;
};

export default connect(ArchiveItem);
