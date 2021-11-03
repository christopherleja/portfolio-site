import "../styles/main.scss";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
