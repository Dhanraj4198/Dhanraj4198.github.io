import {
  Button,
  Grid,
  HStack,
  Heading,
  GridItem,
  Image,
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
      <GridItem>
        <Heading
          size={{ lg: "2xl", md: "lg", sm: "lg" }}
          color="rgb(14, 36, 49)"
        >
          Hi,
        </Heading>
        <HStack>
          <Heading
            size={{ lg: "2xl", md: "lg", sm: "lg" }}
            color="rgb(14, 36, 49)"
          >
            I am{" "}
          </Heading>
          <Heading
            size={{ lg: "2xl", md: "lg", sm: "lg" }}
            color="rgb(8, 111, 143)"
          >
            Dhanraj
          </Heading>
        </HStack>
        <Heading
          size={{ lg: "2xl", md: "lg", sm: "lg" }}
          color="rgb(14, 36, 49)"
        >
          Full Stack Web Developer
        </Heading>
        <a href="https://drive.google.com/uc?export=download&id=1jeoGnGCeVEt6aq0nSq2dJ0CFsdJYmlXN">
          <Button
            bg={"rgb(1, 75, 97);"}
            _hover={{ bg: "rgb(14, 129, 165)" }}
            color="white"
            variant={"solid"}
            width={{ lg: "100px", md: "50px", sm: "30px" }}
            height={{ lg: "40px", md: "25px", sm: "20px" }}
            borderRadius="3px"
            fontSize={{ lg: "20px", md: "11px", sm: "9px" }}
          >
            Resume
          </Button>
        </a>
      </GridItem>
      <GridItem>
        <Image
          width={"100%"}
          src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
        />
      </GridItem>
    </Grid>
  );
}
