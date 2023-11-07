import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      textDark: string;
      textLight: string;
      greyBg: string;
      menuButtonColor: string;
      menuButtonBGColor: string;
      primaryColorOne: string;
      greenColor: string;
      primaryGradient: {
        startingColor: string;
        middleColor: string;
        endColor: string;
      };
      buttonsBGColor: string;
      cardsBGColor: string;
      liquidityTextColor: string;
    };
  }
}
