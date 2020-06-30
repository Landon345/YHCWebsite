import React from "react";
import { Box } from "@chakra-ui/core";

export default function Footer() {
  return (
    <Box
      d="flex"
      height="100px"
      bg="paragraph"
      color="background"
      justifyContent="center"
      alignItems="center"
    >
      @Copyright 2020
    </Box>
  );
}
