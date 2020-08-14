import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Sunset from "../../assets/images/campgroundPinkSunset.jpg";

function Home() {
  return (
    <Box bg="background" minH="100vh">
      <Fade left big>
        <img
          src={Sunset}
          alt="Sunset"
          style={{ height: "45vw", width: "100vw" }}
        />
      </Fade>
      <Flex direction="row" justifyContent="space-evenly" mx="5%" my="20px">
        <Box textAlign="center">
          <Box color="paragraph" py="50px" textAlign="left" fontSize="20px">
            We are a family owned and operated campground based in Richmond, MN
            on the chain of lakes. Enjoy beautiful sunsets, water sports, and
            great fishing at our fine establishment. We are a mid size,
            all-seasonal campground with 117 camping sites.{" "}
            <a href="/YHCWebsite/#/about">Learn more -></a>
          </Box>
          <Box m="auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.018933666596!2d-94.52079408444506!3d45.38878887910021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b5031b54ef90a3%3A0x135e307fea36c011!2s18337%20MN-22%2C%20Richmond%2C%20MN%2056368!5e0!3m2!1sen!2sus!4v1593540431056!5m2!1sen!2sus"
              frameborder="0"
              style={{ border: 0, width: "60vw", height: "30vw" }}
              allowfullscreen=""
              title="google map"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Box>
        </Box>
      </Flex>
      <Box></Box>
    </Box>
  );
}

export default Home;
