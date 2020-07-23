import React from "react";
import { withRouter } from "react-router-dom";
import { NavbarStyle, NavbarLink } from "./Styles";
import { Box } from "@chakra-ui/core";
import Logo from "../../assets/images/YHlogo.jpg";

function Navbar(props) {
  return (
    <div>
      <MyLinks history={props.history} />
    </div>
  );
}
export default withRouter(Navbar);

function MyLinks(props) {
  return (
    <div>
      <NavbarStyle color="background">
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          color="paragraph"
          fontFamily="timesNewRoman"
          fontSize="40px"
          fontWeight="bolder"
        >
          <img
            src={Logo}
            alt="your haven logo"
            style={{ height: "60px", width: "30px" }}
          />
          <Box ml="20px">Your Haven Campground</Box>
        </Box>
        <Box ml="20%"></Box>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/#/about">About</NavbarLink>
        <NavbarLink href="/#/tours">Tour</NavbarLink>
      </NavbarStyle>
    </div>
  );
}
