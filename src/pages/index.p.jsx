import "moment-timezone";
import axios from "axios";
import moment from "moment";
import Head from "next/head";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

import Default from "ui/layouts/Default";

export default function Home(props) {
  const [time, setTime] = useState(moment.tz(new Date(), "Asia/Bishkek"));

  useEffect(() => {
    const refreshTime = setInterval(() => {
      setTime(moment.tz(new Date(), "Asia/Bishkek"));
    }, 1000);

    return () => {
      clearInterval(refreshTime);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Kylym Maratov</title>
        <meta name="title" content="Kylym Maratov" />
        <meta property="og:title" content="Kylym Maratov" />
        <meta property="twitter:title" content="Kylym Maratov" />
      </Head>
      <Default>
        <div className="flex w-full flex-col items-start justify-start space-y-3 md:space-y-6">
          <div className="flex w-full flex-col items-start justify-start space-y-3 md:space-y-6">
            <motion.div
              className="flex items-center space-x-4 text-3xl font-bold tracking-[-0.02rem] text-white text-opacity-80 md:text-5xl"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p>Hey</p>
              <img src="/icons/wave.svg" className="h-[48px] select-none" draggable="false" />
              <p>I'm</p>
              <p>Kylym</p>
              <img src="https://www.codewars.com/users/kylym-maratov/badges/micro" alt="codewars" />
            </motion.div>
            <div className="flex w-full max-w-2xl flex-col items-start justify-start space-y-3 md:space-y-4">
              <motion.p
                className="text-lg text-white text-opacity-70 md:text-xl"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                I am a 22-year-old student and software engineer. I am passionate about information tenchologies and engineering solutions.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex flex-col items-start justify-start space-y-1.5"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <div className="flex flex-row items-center justify-start space-x-2">
              <i className="fas fa-map-marker-alt w-[25px] text-center text-lg text-white text-opacity-90 md:text-xl" />
              <p className="text-lg text-white text-opacity-90 md:text-xl">Kyrgyzstan, Bishkek</p>
            </div>

            <div className="flex flex-row items-center justify-start space-x-2">
              <i className="fas fa-clock w-[25px] text-center text-lg text-white text-opacity-90 md:text-xl" />
              <p className="text-lg text-white text-opacity-90 md:text-xl">
                {time.format("MMMM Do YYYY")} • {time.format("h:mm:ss a")}
              </p>
            </div>
          </motion.div>
        </div>
      </Default>
    </Fragment>
  );
}

