import {Box, Center, Flex, Image} from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import {styled} from "frontity";
import {currencyFormat} from "../helpers";
import {AiOutlineShopping} from "react-icons/ai"
import StyleControl from "../constant/style-control";

const ProductName = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
`

const ProductPrice = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
text-align: center;
color: ${StyleControl.mainColor};
`

const ProductBox = styled(Box)`
width: 190px;
height: 50px;
border: 1px solid ${StyleControl.mainColor};
box-sizing: border-box;
border-radius: 10px;
text-align: center;
`

const ProductButtonText = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: ${StyleControl.mainColor};
display: inline;
vertical-align: middle;
`

const ProductButton = ({link}) => (
    <Link link={link}>
        <ProductBox>
            <ProductButtonText>
                <Center h="50px">
                    <AiOutlineShopping size="29px"/>{" "}Detail Produk
                </Center>
            </ProductButtonText>
        </ProductBox>
    </Link>
)

const ProductPreview = ({data,...rest}) => {
    const {
        product_name,
        featured_media,
        link,
        product_price,
        product_link,
    } = data;

    return (
        <Link link={link}>
            <Flex
                direction="column"
                position="relative"
                bg="white"
                as="article"
                shadow="md"
                borderRadius="15px"
                {...rest}
            >
                <br/>
                {/* Use the frontity settings for featuredPost here */}
                <Center>
                    <Image borderRadius="10px" boxSize="200px" objectFit="cover" src={featured_media.src}/>
                </Center>
                <Flex p="40px" flexGrow="1" direction="column">
                    <ProductName>
                        {product_name}
                    </ProductName>
                    <br/>
                    <ProductPrice>{currencyFormat(product_price)}</ProductPrice>
                    <br/>
                    <Center>
                        <ProductButton link={link}/>
                    </Center>
                </Flex>
            </Flex>
        </Link>
    );
}


export default ProductPreview;
