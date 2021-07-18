import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";

const ProductPreview = ({ data, ...rest }) => {
  const {
    product_name,
    product_description,
    featured_media,
    link,
    product_price,
  } = data;

  return (
    <Flex
      direction="column"
      position="relative"
      bg="white"
      as="article"
      shadow="md"
      {...rest}
    >
      {/* Use the frontity settings for featuredPost here */}
      {featured_media && featured_media.src && (
        <Link link={link}>
          <PostImageWithOverlay {...featured_media} />
        </Link>
      )}

      <Flex p="40px" flexGrow="1" direction="column">
        <Heading fontSize="2xl" as="h4" textTransform="uppercase">
          <Link link={link}>{product_name}</Link>
        </Heading>
        <p>Harga: {product_price}</p>
        <Box
          my="20px"
          flex="1"
          color="gray.700"
          dangerouslySetInnerHTML={{ __html: product_description }}
        />
      </Flex>
    </Flex>
  );
};

export default ProductPreview;
