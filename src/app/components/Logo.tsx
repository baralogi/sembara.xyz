import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
  .logo-dark-theme {
    display: none;
  }
  .dark & .logo-light-theme {
    display: none;
  }
  .dark & .logo-dark-theme {
    display: block;
  }
`;

const LogoImage = () => (
  <Box position="relative" boxSize="20px">
    <Image
      className="logo-light-theme"
      src="/images/logo-dark.png"
      width={20}
      height={20}
      alt="logo"
    />
    <Image
      className="logo-dark-theme"
      src="/images/logo.png"
      width={20}
      height={20}
      alt="logo"
    />
  </Box>
);

const Logo = () => {
  return (
    <LogoLink href="/" scroll={false}>
      <LogoBox>
        <LogoImage />
        &nbsp;
        <Text
          color="logoText"
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Sebastianus Sembara
        </Text>
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
