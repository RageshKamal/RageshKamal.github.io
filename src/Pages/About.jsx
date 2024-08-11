import React from "react";
import { Box, Text, Image, Divider, Flex, Heading } from "@chakra-ui/react";
import about from "../images/ce_banner.jpeg";
import Typewriter from "typewriter-effect";
import ResumeBtn from "../Components/ResumeBtn/ResumeBtn";
const About = () => {
  return (
    <Box id="about" ml={{ base: 0, md: 60 }} p={{ base: "80px 20px", md: 8 }}>
      <Heading fontWeight="bold" textAlign="center">
        About me
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />

      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flex={{ base: 1, lg: "50%" }} p={{ base: "0px", lg: "0 40px" }}>
          <Flex justify={{ base: "center", lg: "flex-start" }} h="100%">
            <Image objectFit="contain" src={about} alt="" w="100%" h="auto" />
          </Flex>
        </Box>

        <Box flex={{ base: 1, lg: "50%" }} pl={{ base: 0, lg: 4 }}>
          <Box>
            <Box fontWeight="bold" fontSize="2xl">
              I'm Ragesh and I'm a{" "}
              <Text as="span" color="blue.500" fontSize="2xl">
                <Typewriter
                  options={{
                    strings: [
                      "Cloud Engineer",
                      // "Passionate Programmer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
            </Box>

            <Text my={4}>
            Versatile and results-driven Remote Support Engineer, aspiring to get into Cloud technology with
over 1 year of experience in providing exceptional technical support.
Proficient in major cloud platforms including Azure and AWS with a strong background in remote
troubleshooting and infrastructure management.
            </Text>
          </Box>
          <Box>
            <ResumeBtn />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
