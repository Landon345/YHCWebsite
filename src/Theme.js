import { theme } from "@chakra-ui/core";

const Theme = {
  ...theme,
  colors: {
    ...theme.colors,

    navbar: "#f0f0f0",

    background: "#fffffe",
    headline: "#272343",
    paragraph: "#2d334a",
    button: "#ffd803",
    buttonText: "#272343",

    stroke: "#272343",
    secondary: "#e3f6f5",
    tertiary: "#bae8e8",
    highlight: "#ffd803",

    cardbackground: "#272343",
    cardparagraph: "#fffffe",
    cardhighlight: "#bae8e8",
  },
};

export default Theme;
