import Body from "../app/components/layouts/Body";
import NextLink from "next/link";
import Paragraph from "../app/components/Paragraph";
import React from "react";
import Section from "../app/components/layouts/Section";
import { BioSection, BioYear } from "../app/components/layouts/Bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
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
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Henlow, My Fren ! 😍
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
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
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello there! I am a software engineer based in Bali, Indonesia. With
            a greatest passion on web technologies like{" "}
            <Link href="https://laravel.com/" target={"_blank"}>
              Laravel
            </Link>
            {", "}
            <Link href="https://laravel.com/" target={"_blank"}>
              Node
            </Link>
            {", and "}
            <Link href="https://laravel.com/" target={"_blank"}>
              React
            </Link>{" "}
            frameworks. Check my work here!
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
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
            <Link href={"https://www.dinamika.ac.id/"} target={"_blank"}>
              Universitas Dinamika
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at{" "}
            <Link href={"https://www.gocement.com/"} target={"_blank"}>
              Gocement
            </Link>{" "}
            as Back-End Developer
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Moved to Bali, and start worked at{" "}
            <Link href={"https://www.bonofactum.com/"} target={"_blank"}>
              Bonofactum
            </Link>{" "}
            as PHP Developer, part of the German jewelry group{" "}
            <Link href={"https://www.julie-grace.de/"} target={"_blank"}>
              JULIE & GRACE
            </Link>
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Programming, Hiking, Fishing, Movie, Games, and Coffee ☕
          </Paragraph>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            Touch me
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:sembara9090@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  sembara9090@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/baralogi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @baralogi
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/baralogi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @baralogi
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/baralogi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @baralogi
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Body>
  );
};

export default Home;
