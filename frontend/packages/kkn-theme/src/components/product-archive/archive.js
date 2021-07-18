import { Box, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import ArchiveHeader from "./archive-header";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";

const Archive = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

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

  return (
    <Box bg="accent.50" as="section">
      {/* If the list is a taxonomy, we render a title. */}
      {data.isProductArchive && (
        <ArchiveHeader
          showPattern={state.theme.showBackgroundPattern}
          taxonomy={"Produk UMKM oleh"}
          title={"Desa Mulusan"}
        />
      )}

      <Box
        padding={{ base: "24px", lg: "40px" }}
        bg="white"
        width={{ lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Iterate over the items of the list. */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="40px">
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        <Pagination mt="56px" />
      </Box>
    </Box>
  );
};

export default connect(Archive);
