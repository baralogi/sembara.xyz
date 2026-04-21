import Body from "../app/components/layouts/Body";
import NextLink from "next/link";
import Paragraph from "../app/components/Paragraph";
import React from "react";
import Section from "../app/components/layouts/Section";
import { BioSection, BioYear } from "../app/components/layouts/Bio";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Body title={"Home"}>
      <Container maxW="xl">
        <Box
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          bg="welcomeBg"
        >
          Henlow, My Fren ! 😍
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading size="4xl" mb={2}>
              Sebastianus Sembara
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              maxWidth="100px"
              borderRadius="full"
              src="./images/profile.jpg"
              alt="profile-image"
            ></Image>
          </Box>
        </Box>
        <Section>
          <Heading
            as="h3"
            textDecoration="underline"
            fontSize={20}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            mt={3}
            mb={4}
          >
            Work
          </Heading>
          <Paragraph>
            Hello there! I am a software engineer based in Bali, Indonesia. With
            a greatest passion on web technologies like{" "}
            <Link href="https://laravel.com/" target={"_blank"} color="linkColor">
              Laravel
            </Link>
            {", "}
            <Link href="https://laravel.com/" target={"_blank"} color="linkColor">
              Node
            </Link>
            {", and "}
            <Link href="https://laravel.com/" target={"_blank"} color="linkColor">
              React
            </Link>{" "}
            frameworks. Check my work here!
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button colorPalette="teal" gap={2}>
                My portfolio
                <FaChevronRight />
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section>
          <Heading
            as="h3"
            textDecoration="underline"
            fontSize={20}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            mt={3}
            mb={4}
          >
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Magelang, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Bachelor’s Degree in Technology Information on
            Information System at{" "}
            <Link
              href={"https://www.dinamika.ac.id/"}
              target={"_blank"}
              color="linkColor"
            >
              Universitas Dinamika
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at{" "}
            <Link
              href={"https://www.gocement.com/"}
              target={"_blank"}
              color="linkColor"
            >
              Gocement
            </Link>{" "}
            as Back-End Developer
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Moved to Bali, and start worked at{" "}
            <Link
              href={"https://www.bonofactum.com/"}
              target={"_blank"}
              color="linkColor"
            >
              Bonofactum
            </Link>{" "}
            as PHP Developer, part of the German jewelry group{" "}
            <Link
              href={"https://www.julie-grace.de/"}
              target={"_blank"}
              color="linkColor"
            >
              JULIE & GRACE
            </Link>
          </BioSection>
        </Section>
        <Section>
          <Heading
            as="h3"
            textDecoration="underline"
            fontSize={20}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            mt={3}
            mb={4}
          >
            I ♥
          </Heading>
          <Paragraph>
            Programming, Hiking, Fishing, Movie, Games, and Coffee ☕
          </Paragraph>
        </Section>
        <Section>
          <Heading
            as="h3"
            textDecoration="underline"
            fontSize={20}
            textUnderlineOffset={6}
            textDecorationColor="#525252"
            textDecorationThickness={4}
            mt={3}
            mb={4}
          >
            Touch me
          </Heading>
          <List.Root>
            <List.Item>
              <Link href="mailto:sembara9090@gmail.com" target="_blank">
                <Button variant="ghost" colorPalette="teal" gap={2}>
                  <IoMail />
                  sembara9090@gmail.com
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://github.com/baralogi" target="_blank">
                <Button variant="ghost" colorPalette="teal" gap={2}>
                  <IoLogoGithub />
                  @baralogi
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://twitter.com/baralogi" target="_blank">
                <Button variant="ghost" colorPalette="teal" gap={2}>
                  <IoLogoTwitter />
                  @baralogi
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://instagram.com/baralogi" target="_blank">
                <Button variant="ghost" colorPalette="teal" gap={2}>
                  <IoLogoInstagram />
                  @baralogi
                </Button>
              </Link>
            </List.Item>
          </List.Root>
        </Section>
      </Container>
    </Body>
  );
};

export default Home;
