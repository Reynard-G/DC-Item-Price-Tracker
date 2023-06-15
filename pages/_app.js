import { NextUIProvider } from '@nextui-org/react';

/*const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // Background
      background: "#262626",
      backgroundAlpha: "rgba(25, 25, 25, 0.6)",
      foreground: "#d9d9d9",
      backgroundContrast: "#262626",

      // Brand Colors
      primaryLight: "$gray300",
      primaryLightHover: "$gray500",
      primaryLightActive: "$gray600",
      primaryLightContrast: "$gray900",
      primary: "linear-gradient(to right, rgb(33, 150, 243), rgb(156, 39, 176), rgb(233, 30, 99))",
      primaryShadow: "rgba(156, 39, 176, 0.5)",
    }
  },
});*/

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;