import { Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";
import Link from "./link";
import StyleControl from "./constant/style-control";
import Language from "./constant/language";

const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg={StyleControl.mainColor}
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = (props) => (
  <Grid
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <GridItem padding="24px" color="white" textAlign="justify" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem colSpan={3} fontFamily="Poppins" lineHeight="8">
        <b>Tentang Kami</b>
        <br></br>
        {Language.indonesian.aboutUs}
      </FooterSectionItem>
      <FooterSectionItem fontFamily="Poppins" lineHeight="8">
        <b>Kategori</b>
        {state.theme.categories.map(([name, link]) => (
          <Fragment key={name}>
            <br />
            <Link link={link} textTransform="capitalize">
              {name}
            </Link>
          </Fragment>
        ))}
      </FooterSectionItem>

      <FooterSectionItem fontFamily="Poppins" lineHeight="8">
        <b>Kontak</b>
        {state.theme.socialLinks.map(([name, link]) => (
          <Fragment key={name}>
            <br></br>
            <Link link={link} textTransform="capitalize">
              {name}
            </Link>
          </Fragment>
        ))}
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
