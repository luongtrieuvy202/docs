import "../styles/main.scss";

export const runtime = "edge";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
