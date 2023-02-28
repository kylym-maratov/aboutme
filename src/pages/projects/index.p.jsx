import Head from "next/head";

import Default from "ui/layouts/Default";
import Project from "./components/Project";

export default function Projects(props) {
  const projects = [
    {
      title: "todo.app",
      subtitle: "React + Node.js",
      description: "For creating and editing quick notes, with this app you will no longer forget or lose your notes.",
      date: "jun 2023 - present",
      status: 1,
      href: "https://todoapp.klmcodes.ru",
    },
    {
      title: "valutakg.bot",
      subtitle: "Python + pytgapi",
      description: "With this bot you can get the current exchange rate for Kyrgyzstan. Easy to use and multifunctional bot.",
      date: "jun 2023 - present",
      status: 2,
      href: "https://todoapp.klmcodes.ru",
    }
  ];

  return (
    <Default>
      <Head>
        <title>Projects • Kylym Maratov</title>
        <meta name="title" content="Projects • Kevin Thomas" />
        <meta property="og:title" content="Projects • Kevin Thomas" />
        <meta property="twitter:title" content="Projects • Kevin Thomas" />
      </Head>
      <div className="flex w-full flex-col items-start justify-start space-y-4">
        <div className="flex items-center space-x-2 text-4xl font-bold tracking-[-0.02rem] text-white text-opacity-80">
          <img src="/icons/think.svg" className="h-[40px] select-none" draggable="false" />
          <p>Projects</p>
        </div>
        <div className="flex w-full flex-col items-start justify-start space-y-2">
          {projects.map((project, index) => (
            <Project key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </Default>
  );
}
