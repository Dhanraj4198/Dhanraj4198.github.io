import { BsGithub, BsLink45Deg } from "react-icons/bs";
import {
  Box,
  Heading,
  Icon,
  Button,
  Text,
  HStack,
  Flex,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
export function ProjectCard({ name, img, git, link, stacks, about }) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 450px)");
  return (
    <Box
      display={"grid"}
      borderRadius={"10px"}
      padding="none"
      textAlign={"center"}
      width={"100%"}
      boxShadow="rgba(50, 50, 105, 0.25) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
    >
      <Image borderTopRadius={"10px"} src={img} width={"100%"} />
      <Box
        backdropFilter={"blur(5px)"}
        padding="20px"
        bg={"rgba(255,255,255,0.7)"}
        margin="none"
        borderBottomRadius={"10px"}
      >
        <Heading
          color={"rgb(14, 36, 49)"}
          fontSize={{ base: "18px", sm: "20", md: "25px", lg: "30px" }}
        >
          {name}
        </Heading>
        <br />
        <Flex justifyContent={"space-evenly"} flexWrap="wrap">
          <a target={"_blank"} href={git}>
            <Button
              _hover={{ bg: "rgb(14, 129, 165)" }}
              bg={"rgb(8, 111, 143)"}
              color="white"
              size={{ base: "xs", lg: "lg", sm: "sm" }}
            >
              <Icon as={BsGithub} />
              <Text paddingLeft={"10px"}>Code</Text>
            </Button>
          </a>
          {isLargerThan1280 ? (
            <HStack>{stacks.map((stack) => stack)}</HStack>
          ) : (
            ""
          )}

          <a target={"_blank"} href={link}>
            <Button
              bg={"rgb(8, 111, 143)"}
              color="white"
              _hover={{ bg: "rgb(14, 129, 165)" }}
              size={{ base: "xs", lg: "lg", sm: "sm" }}
            >
              <Icon as={BsLink45Deg} />
              <Text paddingLeft={"10px"}>Demo</Text>
            </Button>
          </a>
        </Flex>
        <br />
        <Text fontSize={{ base: "12px", sm: "15", md: "18px", lg: "20px" }}>
          {about}
        </Text>
      </Box>
    </Box>
  );
}
