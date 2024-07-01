import Body from "../app/components/layouts/Body";
import UnderConstruction from "../app/components/UnderConstruction";
import { Container } from "@chakra-ui/react";

const Daily = () => {
  return (
    <Body title="Daily">
      <Container maxW={"xl"}>
        <UnderConstruction />
      </Container>
    </Body>
  );
};

export default Daily;
