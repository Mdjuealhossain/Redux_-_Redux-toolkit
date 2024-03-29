import { TypographyVariants as TypographyVariantsOption } from "@mui/material/styles";
import {
  Roboto,
  Merriweather,
  DM_Sans,
  Montserrat,
  Mulish,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const mulish = Mulish({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export interface TypographyVariants extends TypographyVariantsOption {}

export default {
  fontFamily: ` ${montserrat.style.fontFamily}, ${mulish.style.fontFamily}`,
  htmlFontSize: 16,
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "6rem",
    lineHeight: 1.2,
    letterSpacing: "-0.01562em",
  },
  h2: {
    ...roboto.style,
    fontWeight: 700,
    fontSize: "2.813rem",
    lineHeight: 1.2,
    letterSpacing: "0.08125em",
    textTransform: "uppercase",
  },
  h3: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1.875rem",
    lineHeight: 1.2,
    letterSpacing: "0.03125em",
  },
  h4: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.2,
    letterSpacing: "0.03125em",
  },
  h5: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.4,
    letterSpacing: "0.03125em",
  },
  h6: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.2,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "0.8125rem",
    lineHeight: 1.857,
    letterSpacing: "0.00938em",
  },
  body1: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "0.9375rem",
    lineHeight: 1.875,
    letterSpacing: "0.03125em",
  },
  body2: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: "30px",
    // letterSpacing: "0.03125em",
  },
  button: {
    ...roboto.style,
    fontWeight: 500,
    fontSize: "0.75rem",
    lineHeight: 1.75,
    letterSpacing: "0.03125em",
    textTransform: "uppercase",
  },
  caption: {
    ...roboto.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    ...roboto.style,
    fontWeight: 600,
    fontSize: ".75rem",
    lineHeight: 1.875,
    letterSpacing: "0em",
    textTransform: "uppercase",
  },
} as TypographyVariants;
