import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export function AboutSection() {
  return (
    <Container maxW={"80%"} id="about" paddingTop={"180px"}>
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        About
      </Heading>
      <br />
      <br />
      <Grid
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={"50px"}
      >
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            width={{ lg: "50%", md: "60%", sm: "100%" }}
            borderRadius={"10px"}
            src="/Profile.jpg"
          />
        </GridItem>
        <GridItem display={"flex"} textAlign={"left"}>
          <Box margin={"auto"}>
            <Heading
              size={{ lg: "lg", md: "md", sm: "md" }}
              color="rgb(14, 36, 49)"
            >
              I am Dhanraj Jagtap
            </Heading>
            <Text fontSize={{ lg: "22px", md: "20px", sm: "16px" }}>
              A web developer with a vast array of knowledge in many different
              front end and backend languages, responsive frameworks, databases,
              and best code practices. Look forward to using my skills for
              gaining more experience.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
