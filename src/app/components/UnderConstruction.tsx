import NextLink from "next/link";
import { Box, Button, Heading, Text, Separator } from "@chakra-ui/react";

const UnderConstruction = () => {
  return (
    <>
      <Heading as="h1">Sorry</Heading>
      <Text>The page you&apos;re looking for was under construction.</Text>
      <Separator my={6} />
      <Box my={6} textAlign="center">
        <NextLink href="/">
          <Button colorPalette="teal">Return to home</Button>
        </NextLink>
      </Box>
    </>
  );
};

export default UnderConstruction;
