import React, { useState } from "react";
import { Box, Grid, List, ListItem, ListIcon } from "@chakra-ui/core";
import { css } from "emotion";
import JulyFamily from "../../assets/images/JulyFamily.jpg";

function About() {
  const [facilities] = useState([
    "Sand Volleyball and Basketball Court",
    "Handicapped Bathroom on Site",
    "Lodge With Gathering Space",
    "Great Treats - Candy, Pop, Water, Pizza, Ice Cream.",
    "Sandy Beach",
    "Two Playground Areas",
    "Shuffleboard",
    "Kayaks, Paddle Board, and Paddle Boat",
    "Live Bait",
    "Boat Gas",
    "Fish Cleaning House",
    "Laundry Facility",
    "Great Sunsets",
    "Large Grassy Sites",
    "Wireless Internet",
    "Softened Water",
  ]);
  const [operation] = useState([
    "Season Runs From May 1st to October 1st",

    "Quiet Time - Before 8a.m. and after 11p.m.",

    "Garbage and Recycling Within Park Facilities",

    "Management Cuts Lawn but does not Trim",

    "Dock Slip - $150 per Season",

    "Contract Must be Signed by September 1st and Returned with Non-Refundable Deposit for the Next Season",

    "Contract to be Signed by One Family Unit",

    "Trailers Coming into the Park Must be Less Than 15 Years Old",

    "ONLY ONE Dog/Pet is Allowed per Site - This Includes Visitors Pets",

    "Friendly Campground with Scheduled Activities",

    "All Sites With 50amp Electric",

    "Gated Community for Safety",

    "No Charge for Visitors",

    "Rates: $2800 includes tax",
  ]);
  return (
    <Box
      minH="100vh"
      bg="background"
      mx="1%"
      className={css`
        @media only screen and (min-width: 768px) {
          margin: 0px 8%;
        }
      `}
    >
      <Box
        fontSize="50px"
        color="headline"
        textAlign="center"
        fontWeight="bold"
        py="40px"
      >
        About Us
      </Box>
      <Box color="paragraph" fontSize="20px">
        We are a family of five. Chad and Trude Schlangen, the owners, are the
        parents of three amazing kids. Dominic and Landon are in their 20s and
        studying in their respective fields. Landon is studying Computer
        Science, and Dominic is studying Industrial Engineering. Brooke is the
        youngest in the family. Thank you for checking out our website! More
        operational details are below.
      </Box>

      <img
        className="family-img"
        src={JulyFamily}
        alt="Our Family"
        height="auto"
        width="100%"
      />

      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={8}
        mb="40px"
        textAlign="center"
      >
        <Box>
          <Box fontSize="30px" mb="20px" fontWeight="bold" color="headline">
            Facilities
          </Box>
          <List spacing={3} textAlign="left">
            {facilities.map((text, i) => (
              <ListItem d="flex" flexDir="row" alignItems="center" key={i}>
                <ListIcon icon="sun" color="paragraph" />
                <Box fontSize="18px" ml="10px">
                  {text}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Box fontSize="30px" mb="20px" fontWeight="bold" color="headline">
            Operation Details
          </Box>
          <List spacing={3} textAlign="Left">
            {operation.map((text, i) => (
              <ListItem d="flex" flexDir="row" alignItems="center" key={i}>
                <ListIcon icon="sun" color="paragraph" />
                <Box fontSize="18px" ml="10px">
                  {text}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </Box>
  );
}

export default About;
