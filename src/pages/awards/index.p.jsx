import Head from "next/head";

import Award from "./components/Award";
import Default from "ui/layouts/Default";

export default function Awards(props) {
  const awards = [

    {
      title: "freeCodeCamp",
      subtitle: "jun 2023",
      lines: [
        "This certifies that Kylym Maratov has successfully completed the freeCodeCamp.org",
        "JavaScript Algorithms and Data Structures"
      ],
      link: "https://freecodecamp.org/certification/fcc3f89f131-b88e-4988-aa5a-65ba88e5ebf9/javascript-algorithms-and-data-structures",
    },
    {
      title: "freeCodeCamp",
      subtitle: "jun 2023",
      lines: [
        "This certifies that Kylym Maratov has successfully completed the freeCodeCamp.org",
        "Back End Development and APIs"
      ],
      link: "https://freecodecamp.org/certification/fcc3f89f131-b88e-4988-aa5a-65ba88e5ebf9/back-end-development-and-apis",
    }
  ];

  return (
    <Default>
      <Head>
        <title>Awards • Kylym Maratov</title>
        <meta name="title" content="Awards • Kevin Thomas" />
        <meta property="og:title" content="Awards • Kevin Thomas" />
        <meta property="twitter:title" content="Awards • Kevin Thomas" />
      </Head>
      <div className="flex w-full flex-col items-start justify-start space-y-4">
        <div className="flex items-center space-x-2 text-4xl font-bold tracking-[-0.02rem] text-white text-opacity-80">
          <img src="/icons/trophy.svg" className="h-[40px] select-none" draggable="false" />
          <p>Awards</p>
        </div>
        <div className="flex w-full flex-col items-start justify-start space-y-2">
          {awards.map((award, index) => (
            <Award key={index} index={index} {...award} />
          ))}
        </div>
      </div>
    </Default>
  );
}
