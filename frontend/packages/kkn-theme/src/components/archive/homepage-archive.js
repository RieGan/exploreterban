import {Box, Flex, Heading, SimpleGrid, Center} from "@chakra-ui/react";
import {connect, styled} from "frontity";
import React from "react";
// import { FeaturedPostSection } from "../featured-post/featured-post";
import {getFeaturedProduct, splitPosts} from "../helpers";
import {Newsletter} from "../newsletter";
import ArchiveItem from "./archive-item";
import ProductItem from "./product-item";
import {PaginationButton} from "./pagination";
import StyleControl from "../constant/style-control";
import Language from "../constant/language";
import WelcomingBackground from "../../assets/welcoming-bg.png";
import AboutBackground from "../../assets/about-bg.png"
import Link from "../link"
import {BsArrowRight} from "react-icons/bs"


const WelcomingStyle = {
    background: `linear-gradient(90deg, ${StyleControl.mainColor} 1.02%, rgba(156, 156, 66, 0.2) 101.02%),url(${WelcomingBackground})`,
    backgroundSize: "cover"
}
const AboutStyle = {
    background: `linear-gradient(90deg, #EEFFFC 0%, rgba(255, 255, 255, 0.2) 100%),url(${AboutBackground})`,
    backgroundSize: "cover"
}
const WelcomingTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
`
const AboutTitle = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 54px;
text-transform: uppercase;
color: #262626;
`

const AboutCaption = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #262626;
max-width: 600px;
`

const WelcomingCaption = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
`

const Title = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 54px;
text-transform: uppercase;
color: #262626;
display: inline;
`

const BoxButtonClickAll = styled.div`
width: 267px;
height: 48px;
background: ${StyleControl.mainColor};
border-radius: 10px;
`

const BoxLocationAbout = styled.div`
width: 180px;
height: 48px;
background: ${StyleControl.mainColor};
border-radius: 10px;
`

const TextButtonClickAll = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
`

const ButtonAll = ({link, text}) => (
    <Link link={link}>
        <BoxButtonClickAll>
            <Center h="48px">
                <TextButtonClickAll>{text}</TextButtonClickAll><BsArrowRight size="20px" color="#FFFFFF"/>
            </Center>
        </BoxButtonClickAll>
    </Link>
)

const HomepageArchive = ({state, libraries}) => {
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
            <Flex style={WelcomingStyle} height={{base: "400px", lg: "600px"}} align="center" justifyContent="center">
                <Box w="80vw">
                    <WelcomingTitle>
                        {Language.indonesian.welcomeTitle}
                    </WelcomingTitle>
                    <WelcomingCaption>
                        {Language.indonesian.welcomeCaption}
                    </WelcomingCaption>
                </Box>
            </Flex>
            {/* If in home ("/") */}
            {state.router.link == "/" && (
                <Box
                    py={{base: "64px", md: "80px"}}
                    px={{base: "24px", md: "40px"}}
                    width={{base: "auto", lg: "80%"}}
                    maxWidth="1200px"
                    mx="auto"
                >
                    <Title>
                        Produk{" "}
                    </Title>
                    <Title style={{color:StyleControl.mainColor}}>
                        UMKM
                    </Title>
                    <SimpleGrid
                        mt={{base: "64px", md: "80px"}}
                        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                        spacing="40px"
                    >
                        {product.map(({type, id}) => {
                            const item = state.source[type][id];
                            return <ProductItem key={item.id} item={item}/>;
                        })}
                    </SimpleGrid>
                    <br/>
                    <Center>
                        <ButtonAll link="/product" text="Lihat Semua Produk"/>
                    </Center>
                    {/*<PaginationButton mt="40px" link="/product">*/}
                    {/*    More product*/}
                    {/*</PaginationButton>*/}
                </Box>
            )}
            <Flex style={AboutStyle} height={{base: "400px", lg: "600px"}} align="center" justifyContent="center">
                <Box w="80vw">
                    <AboutTitle>
                        {state.theme.logo}
                    </AboutTitle>
                    <br/>
                    <AboutCaption>
                        {Language.indonesian.welcomeAbout}
                    </AboutCaption>
                    <br/>
                    <Link link="/maps">
                        <BoxButtonClickAll>
                            <Center h="48px">
                                <TextButtonClickAll>
                                    Lokasi
                                </TextButtonClickAll>
                            </Center>
                        </BoxButtonClickAll>
                    </Link>
                </Box>
            </Flex>
            <Box
                py={{base: "64px", md: "80px"}}
                px={{base: "24px", md: "40px"}}
                width={{base: "auto", lg: "80%"}}
                maxWidth="1200px"
                mx="auto"
            >
                <Title>
                    Artikel
                </Title>
                <Heading
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize={{base: "4xl", md: "6xl"}}
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

                <PaginationButton mt="40px" link="/category/blog">
                    Lihat semua artikel
                </PaginationButton>
            </Box>
            {libraries.newsletter && (
                <Newsletter showPattern={state.theme.showBackgroundPattern}/>
            )}
        </Box>
    );
};

export default connect(HomepageArchive);
