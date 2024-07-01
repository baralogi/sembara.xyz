import Body from "../app/components/layouts/Body";
import UnderConstruction from "../app/components/UnderConstruction";
import { Container } from "@chakra-ui/react";

const Speak = () => {
  return (
    <Body title="Speak">
      <Container maxW={"xl"}>
        <UnderConstruction />
      </Container>
    </Body>
  );
};

export default Speak;
