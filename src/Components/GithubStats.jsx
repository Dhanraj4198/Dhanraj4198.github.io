import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const GithubStats = () => {
  return (
    <div>
      <Container maxW={"80%"} paddingBottom="80px">
        <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
          Github Calendar
        </Heading>
        <br />
        <br />
        <Box display={"flex"} justifyContent="center">
          <GitHubCalendar color={"teal"} username="dhanraj4198" />
        </Box>
        <br />
        <br />
        <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
          Github Stats
        </Heading>
        <br />
        <br />
        <GridItem>
          <Image
            width={"100%"}
            align={"center"}
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=dhanraj4198&theme=nord_bright"
          />
        </GridItem>
        <br /><br />
        <Grid
          templateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
          gap="30px"
        >
          <GridItem>
            <Image
              width={"100%"}
              align={"center"}
              src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=dhanraj4198&theme=nord_bright"
            />
          </GridItem>
          <GridItem>
            <Image
              width={"100%"}
              align={"center"}
              src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=dhanraj4198&theme=nord_bright"
            />
          </GridItem>
        </Grid>
        
      </Container>
    </div>
  );
};

export default GithubStats;
