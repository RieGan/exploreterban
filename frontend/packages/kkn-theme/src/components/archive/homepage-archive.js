import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React from "react";
// import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts, getFeaturedProduct } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import ProductItem from "./product-item";
import { PaginationButton } from "./pagination";
import StyleControl from "../constant/style-control";
import Language from "../constant/language";
import WelcomingBackground from "../../assets/welcoming-bg.png";

const WelcomingStyle = {
  background: `linear-gradient(90deg, #9C9C42 1.02%, rgba(156, 156, 66, 0.2) 101.02%),url(${WelcomingBackground})`,
};
const WelcomingTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
`;
const WelcomingCaption = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
const HomepageArchive = ({ state, libraries }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  // If in home ("/")
  var productData, product;
  if (state.router.link == "/") {
    productData = state.source.get(`/product`);
    product = getFeaturedProduct(state, productData.items, 4);
  }

  return (
    <Box bg={StyleControl.pageColor} as="section">
      {/*<FeaturedPostSection*/}
      {/*  data={firstThreePosts.map((post) => formatPostData(state, post))}*/}
      {/*/>*/}
      <Flex
        style={WelcomingStyle}
        height={{ base: "400px", lg: "600px" }}
        align="center"
        justifyContent="center"
      >
        <Box w="80vw">
          <WelcomingTitle>{Language.indonesian.welcomeTitle}</WelcomingTitle>
          <WelcomingCaption>
            {Language.indonesian.welcomeCaption}
          </WelcomingCaption>
        </Box>
      </Flex>
      {/* If in home ("/") */}
      {state.router.link == "/" && (
        <Box
          py={{ base: "64px", md: "80px" }}
          px={{ base: "24px", md: "40px" }}
          width={{ base: "auto", lg: "80%" }}
          maxWidth="1200px"
          mx="auto"
        >
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
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing="40px"
          >
            {product.map(({ type, id }) => {
              const item = state.source[type][id];
              return <ProductItem key={item.id} item={item} />;
            })}
          </SimpleGrid>

          <PaginationButton mt="40px" link="/product">
            More product
          </PaginationButton>
        </Box>
      )}
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
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
          columns={{ base: 1, md: 2, lg: 3 }}
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
