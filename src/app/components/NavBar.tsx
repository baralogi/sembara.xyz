import * as React from "react";
import Logo from "./Logo";
import NextLink from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  Stack,
  Portal,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children: React.ReactNode;
}

interface NavbarProps {
  path: string;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  const active = path === href;
  return (
    <Link
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : "navLinkInactive"}
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      {...props}
      asChild
    >
      <NextLink href={href} target={_target}>
        {children}
      </NextLink>
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="navbarBg"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Box
        maxW={{ base: "full", md: "720px", lg: "720px" }}
        mx="auto"
        px={{ base: 4, md: 2 }}
        py={2}
      >
        <Flex align="center" justify="space-between" gap={{ base: 2, md: 8 }}>
          <Flex align="center" minW={0} flexShrink={0}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction="row"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            ml={2}
            mr="auto"
            gap={2}
          >
            <LinkItem href="/abouts" path={path}>
              About
            </LinkItem>
            <LinkItem href="/daily" path={path}>
              Daily
            </LinkItem>
          </Stack>

          <Box textAlign="right" flexShrink={0}>
            <ThemeToggleButton />

            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu.Root lazyMount unmountOnExit id="navbar-menu">
                <Menu.Trigger asChild>
                  <IconButton variant="outline" aria-label="Options">
                    <FaBars />
                  </IconButton>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="abouts" asChild>
                        <NextLink href="/abouts">About</NextLink>
                      </Menu.Item>
                      <Menu.Item value="daily" asChild>
                        <NextLink href="/daily">Daily</NextLink>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
