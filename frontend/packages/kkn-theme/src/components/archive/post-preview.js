import { Box, Flex, Center } from "@chakra-ui/react";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";
import PostTags from "../post/post-tags";
import { styled } from "frontity";

const Title = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #262626;
`

const PublishDate = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
display: inline;
`

const PostPreview = ({ data, ...rest }) => {
  const { title, excerpt, featured_media, link, tags, publishDate } = data;

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
            <PublishDate>
              {publishDate + " | "}
            </PublishDate>
            <PostTags color="black" justify="flex-start" tags={tags} />
          <Link link={link}>
            <Title>
              {title}
            </Title>
          </Link>
          {/*<Heading fontSize="2xl" as="h4" textTransform="uppercase">*/}
          {/*  <Link link={link}>{title}</Link>*/}
          {/*</Heading>*/}
          <Box
              my="20px"
              flex="1"
              color="gray.700"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="normal"
              fontSize="16px"
              lineHeight="26px"
              overflow="hidden"
              textOverflow="ellipsis"
              dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </Flex>
      </Flex>
  );
};

export default PostPreview;