import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Sidemenu from "../components/sidemenu";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const paths = ["/", "/auth/login", "/auth/register"];

  if (paths.includes(router.pathname)) return <Component {...pageProps} />;

  return (
    <div>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </div>
  );
}
