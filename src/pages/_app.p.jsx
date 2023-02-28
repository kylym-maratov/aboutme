import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AnimateSharedLayout } from "framer-motion";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import "ui/styles/custom.css";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    new Audio("/sounds/boop.mp3").play().catch((e) => void 0);
  }, [router.pathname]);

  return (
    <AnimateSharedLayout>
      <Head>
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={4}
        outerSize={32}
        color="147, 197, 253"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
      />
    </AnimateSharedLayout>
  );
}
