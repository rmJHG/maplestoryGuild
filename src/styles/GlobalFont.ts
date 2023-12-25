import { createGlobalStyle } from "styled-components";
import SunflowerBold from "../fonts/Sunflower-Bold.woff";
import SunflowerLight from "../fonts/Sunflower-Light.woff";
import SunflowerMedium from "../fonts/Sunflower-Medium.woff";
import Lato from "../fonts/Lato-Regular.woff";

const GlobalFont = createGlobalStyle`
@font-face {
    font-family:"SunflowerMedium";
    src: local("SunflowerMedium"), url(${SunflowerMedium}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family:"SunflowerBold";
    src: local("SunflowerBold"),  url(${SunflowerBold}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family:"SunflowerLight";
    src: local("SunflowerLight"), url(${SunflowerLight}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "Lato";
    src: local("Lato"), url(${Lato}) format("woff")
}

`;

export default GlobalFont;
