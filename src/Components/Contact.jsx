import { Container, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <Container
      maxW={"5%"}
      marginRight={"0px"}
      position={"fixed"}
      right="0px"
      top={"50%"}
    >
      <Flex
        justifyContent="center"
        gap="20px"
        width={"100%"}
        flexDir={"column"}
      >
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=jagtapdhanraj116@gmail.com&tf=cm"
          target={"_blank"}
        >
          <Icon
            _hover={{ color: "rgb(234,67,53)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BiEnvelope}
          />
        </a>
        <a href="https://wa.me/+919404268198" target={"_blank"}>
          <Icon
            _hover={{ color: "rgb(47,230,100)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BiPhoneCall}
          />
        </a>
        <a href="https://github.com/Dhanraj4198" target={"_blank"}>
          <Icon
            _hover={{ color: "grey", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BsGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/jagtapdhanraj/" target={"_blank"}>
          <Icon
            _hover={{ color: "rgb(9,97,184)", cursor: "pointer" }}
            width={"70%"}
            height="70%"
            as={BsLinkedin}
          />
        </a>
      </Flex>
    </Container>
  );
};

export default Contact;
