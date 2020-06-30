import React, { useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/core";
import Logo from "../../assets/images/YHlogo.jpg";
import Sunset from "../../assets/images/campgroundPinkSunset.jpg";
import Sunset2 from "../../assets/images/campground2016sunset.jpg";
import Sunset3 from "../../assets/images/campground2017sunset.jpg";
import Drone from "../../assets/images/dronepictureaugust2018.jpg";
import Fish from "../../assets/images/fish.jpg";
import skyview from "../../assets/images/skyview.jpg";
import smallmouthbass from "../../assets/images/smallmouthbass.jpg";
import greengrass from "../../assets/images/greengrass.jpg";
import memorial from "../../assets/images/memorial.jpg";
import Gallery from "react-grid-gallery";

function Tour() {
  const [IMAGES, setImages] = useState([
    {
      src: Sunset,
      thumbnail: Sunset,
      nano: Sunset,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Sunset",
    },
    {
      src: Sunset2,
      thumbnail: Sunset2,
      nano: Sunset2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Sunset",
    },

    {
      src: Sunset3,
      thumbnail: Sunset3,
      nano: Sunset3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Sunset",
    },
    {
      src: Drone,
      thumbnail: Drone,
      nano: Drone,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Drone picture",
    },
    {
      src: Fish,
      thumbnail: Fish,
      nano: Fish,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Sun fish",
    },
    {
      src: greengrass,
      thumbnail: greengrass,
      nano: greengrass,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "campsites",
    },
    {
      src: skyview,
      thumbnail: skyview,
      nano: skyview,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "skyview",
    },
    {
      src: smallmouthbass,
      thumbnail: smallmouthbass,
      nano: smallmouthbass,
      thumbnailWidth: 170,
      thumbnailHeight: 212,
      caption: "small mouth bass",
    },
    {
      src: memorial,
      thumbnail: memorial,
      nano: memorial,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "memorial day",
    },
  ]);
  return (
    <Box bg="background" minH="100vh">
      <Box bg="stroke">
        <Box
          display="block"
          minH="1px"
          w="90%"
          m="auto"
          overflow="auto"
          textAlign="center"
          bg="stroke"
        >
          <Gallery
            images={IMAGES}
            margin={10}
            rowHeight={200}
            backdropClosesModal={true}
            showLightboxThumbnails={true}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" py="50px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YTQw_lwkikU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
}

export default Tour;
