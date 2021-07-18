import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts, getFeaturedProduct } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import ProductItem from "./product-item";
import { PaginationButton } from "./pagination";

const HomepageArchive = ({ state, libraries }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  const productData = state.source.get(`/product`);
  // Fungsi getFeaturedProduct:  max 5 data
  const product = getFeaturedProduct(state, productData.items);

  return (
    <Box bg="accent.50" as="section">
      <FeaturedPostSection
        data={firstThreePosts.map((post) => formatPostData(state, post))}
      />
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Produk UMKM */}
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="accent.400"
        >
          Produk UMKM
        </Heading>

        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 4 }}
          spacing="40px"
        >
          {product.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ProductItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        {/* Posts */}
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="accent.400"
        >
          Latest Posts
        </Heading>

        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 2 }}
          spacing="40px"
        >
          {othersPosts.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        <PaginationButton mt="40px" link="/page/2">
          More posts
        </PaginationButton>
      </Box>
      {libraries.newsletter && (
        <Newsletter showPattern={state.theme.showBackgroundPattern} />
      )}
    </Box>
  );
};

export default connect(HomepageArchive);
