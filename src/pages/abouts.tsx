import Body from "../app/components/layouts/Body";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Body title="About">
      <Container maxW={"xl"} mt={28}>
        <Box my={4}>
          <Heading as="h1">About</Heading>
          <Heading as="h2" size="md">
            My name is Sebastianus Sembara,
          </Heading>
        </Box>
        <Text textAlign="justify">
          because Sebastianus Sembara is too long, you can call me Bara. Born in
          Magelang, Indonesia. and now live in <strong>Bali</strong>, Indonesia.
          A bachelor&apos;s degree graduate from Technology Information on
          Information System at{" "}
          <Link href="https://www.dinamika.ac.id/" target={"_blank"}>
            Universitas Dinamika
          </Link>
          {""}. With a greatest passion on web technologies like{" "}
          <Link href="hhttps://laravel.com/" target={"_blank"}>
            @laravelphp
          </Link>
          {", "}
          <Link href="https://nodejs.org/en/" target={"_blank"}>
            @nodejs
          </Link>
          {", "}
          <Link href="https://reactjs.org/" target={"_blank"}>
            @reactjs
          </Link>{" "}
          frameworks. I have a big dream to become the best software engineer in
          the universe.
        </Text>
        <Divider my={6} />
        <Box my={4}>
          <Heading as="h1">Skills</Heading>
          <HStack mt={4} spacing={8} align={"flex-start"}>
            <VStack align={"flex-start"}>
              <Text>HTML5</Text>
              <Text>CSS3</Text>
              <Text>Boostrap</Text>
              <Text>Next</Text>
            </VStack>
            <VStack align={"flex-start"}>
              <Text>Java Spring</Text>
              <Text>PHP Laravel</Text>
              <Text>NodeJS</Text>
              <Text>Docker</Text>
            </VStack>
            <VStack align={"flex-start"}>
              <Text>MariaDB/ MySQL</Text>
              <Text>PostgreSQL</Text>
              <Text>MongoDB</Text>
              <Text>Redis</Text>
              <Text>Firebase</Text>
            </VStack>
          </HStack>
        </Box>
      </Container>
    </Body>
  );
};

export default About;
