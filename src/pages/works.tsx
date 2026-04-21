import Body from "../app/components/layouts/Body";
import UnderConstruction from "../app/components/UnderConstruction";
import { Container } from "@chakra-ui/react";

const Work = () => {
  return (
    <Body title="Work">
      <Container maxW={"xl"}>
        <UnderConstruction />
      </Container>
    </Body>
  );
};

export default Work;
