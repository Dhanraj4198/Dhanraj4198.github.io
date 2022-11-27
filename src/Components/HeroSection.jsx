import {
  Button,
  Grid,
  HStack,
  Heading,
  GridItem,
  Image,
  Box,
} from "@chakra-ui/react";
export function HeroSection() {
  return (
    <Grid
      paddingTop={"200px"}
      maxW={"80%"}
      id="hero"
      margin={"auto"}
      gridTemplateColumns={{
        lg: "repeat(2,1fr)",
        md: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
      }}
      gap="30px"
    >
      <GridItem display={"flex"} textAlign="left" alignItems={"center"}>
        <Box>
          <Heading
            size={{ lg: "2xl", md: "2xl", sm: "2xl", base: "xl" }}
            color="rgb(8, 111, 143)"
            marginBottom={{ lg: "10px" }}
          >
            DHANRAJ JAGTAP
          </Heading>
          <Heading
            fontWeight={"normal"}
            size={{ lg: "xl", md: "xl", sm: "xl", base: "lg" }}
            color="rgb(90,90,90)"
            marginBottom={"16px"}
          >
            Full Stack Web Developer
          </Heading>
          <a href="https://drive.google.com/uc?export=download&id=1jeoGnGCeVEt6aq0nSq2dJ0CFsdJYmlXN">
            <Button
              bg={"rgb(1, 75, 97);"}
              _hover={{ bg: "rgb(14, 129, 165)" }}
              color="white"
              variant={"solid"}
              width="100px"
              height={"40px"}
              borderRadius="3px"
              marginBottom={"10px"}
              fontSize="16px"
            >
              Resume
            </Button>
          </a>
        </Box>
      </GridItem>
      <GridItem>
        <Image
          width={"100%"}
          src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
        />
      </GridItem>
    </Grid>
  );
}
