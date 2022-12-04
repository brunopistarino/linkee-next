import "../styles/main.scss";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
