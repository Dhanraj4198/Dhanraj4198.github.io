import styles from "./Styles/ProjectsSection.module.css";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import {
  Box,
  Heading,
  Icon,
  Image,
  Button,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
export function ProjectCard({ name, img, git, link, stacks, about }) {
  return (
    <Box
      display={"flex"}
      justifyContent="flex-end"
      flexDir={"column"}
      borderRadius={"10px"}
      padding="none"
      textAlign={"center"}
      width={"100%"}
      boxShadow="rgba(50, 50, 105, 0.25) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
      margin={"auto"}
      height="80%"
      backgroundImage={img}
      bgPos="top"
      bgSize={"100%"}
      bgBlendMode=""
      backgroundRepeat="no-repeat"
    >
      <Box
        marginTop={"50%"}
        backdropFilter={"blur(3px)"}
        padding="20px"
        bg={"rgba(0,0,0,0.2)"}
        margin="none"
        borderBottomRadius={"10px"}
      >
        <Heading color={"rgb(14, 36, 49)"} size={"lg"}>
          {name}
        </Heading>
        <br />
        <Flex justifyContent={"space-evenly"} flexWrap="wrap">
          <a href={git}>
            <Button
              _hover={{ bg: "rgb(14, 129, 165)" }}
              bg={"rgb(8, 111, 143)"}
              color="white"
            >
              <Icon as={BsGithub} />
              <Text paddingLeft={"10px"}>Code</Text>
            </Button>
          </a>
          <HStack >{stacks.map((stack) => stack)}</HStack>
          <a href={link}>
            <Button
              bg={"rgb(8, 111, 143)"}
              color="white"
              _hover={{ bg: "rgb(14, 129, 165)" }}
            >
              <Icon as={BsLink45Deg} />
              <Text paddingLeft={"10px"}>Demo</Text>
            </Button>
          </a>
        </Flex>
        <br />
        <Text fontSize={"20px"}>{about}</Text>
      </Box>
    </Box>
  );
}
