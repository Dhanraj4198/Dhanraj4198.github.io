import { Link } from "react-scroll";
import Styles from "./Styles/Navbar.module.css";
import {
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import Navmenu from "./Navmenu";
export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 1050px)");
  const name = "<Dhanraj/>";
  return (
    <Container
      shadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
      maxW={"100%"}
      position="fixed"
      backdropFilter={"blur(10px)"}
      color="rgb(1, 75, 97)"
      padding={"20px 40px"}
      top="0px"
      margin={"auto"}
      left="0px"
      zIndex={"10"}
    >
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box>
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
          >
            <Heading size={{ lg: "lg", md: "lg", sm: "md" }}>{name}</Heading>
          </Link>
        </Box>
        <Flex
          justifyContent={"space-around"}
          width="40%"
          fontSize={"20px"}
          fontWeight="500"
        >
          {isLargerThan800 ? (
            <>
              {" "}
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                activeClass="active"
              >
                <Text _hover={{ borderBottom: "5px solid" }}>About</Text>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid" }}>Skills</Text>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid" }}>Projects</Text>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                <Text _hover={{ borderBottom: "5px solid" }}>Contact</Text>
              </Link>
              <a href="https://drive.google.com/uc?export=download&id=1jeoGnGCeVEt6aq0nSq2dJ0CFsdJYmlXN">
                <Button
                  bg={"rgb(1, 75, 97);"}
                  _hover={{ bg: "rgb(14, 129, 165)" }}
                  color="white"
                  h="30px"
                  variant={"solid"}
                >
                  Resume
                </Button>
              </a>{" "}
            </>
          ) : (
            <Navmenu />
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
