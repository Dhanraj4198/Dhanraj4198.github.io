import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const GithubStats = () => {
  return (
    <div>
      <Container>
        <Grid>
          <GridItem>
            <Image
              align={"center"}
              src="https://github-readme-stats.vercel.app/api/top-langs?username=dhanraj4198&show_icons=true&locale=en&layout=compact"
            />
          </GridItem>
          <GridItem>
            <Image
              align={"cen"}
              src="https://github-readme-stats.vercel.app/api?username=dhanraj4198&show_icons=true&locale=en"
            />
          </GridItem>
          <GridItem>
            <Image
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
