import { Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";

const GithubStats = () => {
  return (
    <div>
      <Container maxW={"80%"} paddingBottom="80px">
        <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
          Github Stats
        </Heading>
        <br />
        <br />

        <Grid
          templateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
          gap="30px"
        >
          <GridItem>
            <Image
              width={"100%"}
              align={"center"}
              src="https://github-readme-stats.vercel.app/api/top-langs?username=dhanraj4198&show_icons=true&locale=en&layout=compact"
            />
          </GridItem>
          <GridItem>
            <Image
              width={"100%"}
              align={"cen"}
              src="https://github-readme-stats.vercel.app/api?username=dhanraj4198&show_icons=true&locale=en"
            />
          </GridItem>
          <GridItem>
            <Image
              width={"100%"}
              align={"cen"}
              src="https://github-readme-streak-stats.herokuapp.com/?user=dhanraj4198&"
            />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default GithubStats;
