import { Box } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";

// eslint-disable-next-line
const FeaturedMedia = ({ state, featured_media, ...props }) => {
  // is empty if the id doesn't exist in state.source anymore
  const noImgProps = Object.keys(featured_media).length === 0;

  if (noImgProps) return null;

  return (
    <Box as="figure" mt={4} height="500px" {...props}>
      <Box as={Image} boxSize="100%" objectFit="cover" {...featured_media} />
    </Box>
  );
};

export default connect(FeaturedMedia);
