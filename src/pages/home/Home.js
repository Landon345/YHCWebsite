import React, { useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/core";
import Sunset from "../../assets/images/campgroundPinkSunset.jpg";

function Home() {
  return (
    <Box bg="background" minH="100vh">
      <Box>
        <img
          src={Sunset}
          alt="Sunset"
          style={{ height: "45vw", width: "100vw" }}
        />
      </Box>
      <Flex direction="row" justifyContent="space-evenly" mx="5%" my="20px">
        <Box textAlign="center">
          <Box color="paragraph" py="50px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
            ducimus beatae, commodi pariatur nihil amet distinctio omnis
            provident quam veniam porro vitae sed ratione minima soluta
            explicabo! Eaque voluptatum quibusdam adipisci minus dolore vitae
            doloremque est a fugit, voluptas, eligendi non suscipit asperiores,
            quas laborum perspiciatis autem culpa voluptatem.
          </Box>
          <Box m="auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.018933666596!2d-94.52079408444506!3d45.38878887910021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b5031b54ef90a3%3A0x135e307fea36c011!2s18337%20MN-22%2C%20Richmond%2C%20MN%2056368!5e0!3m2!1sen!2sus!4v1593540431056!5m2!1sen!2sus"
              frameborder="0"
              style={{ border: 0, width: "60vw", height: "30vw" }}
              allowfullscreen=""
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
