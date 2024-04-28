import { DownloadBtn } from "../DownloadBtn/DownloadBtn";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";

export const HomeIntroduction = () => {
  return (
    <div className="flex flex-col gap-base pb-medium border-b xl:gap-medium">
      <div className="flex flex-col gap-small">
        <h1>
          Hey There! <br /> I'm Oleksandr...
        </h1>
        <p className="text-justify text-text text-base font-light md:max-w-[380px] md:text-middle">
          Passionate about coding and driven by innovation, I thrive in
          collaborative environments, constantly seeking to craft elegant
          solutions and contribute effectively to dynamic teams.
        </p>
      </div>
      <div className="flex justify-between items-center md:justify-start md:gap-base">
        <ForwardBtn
          navLink="about"
          content="More about Me"
          className="md:w-[200px]"
        />
        <DownloadBtn />
      </div>
    </div>
  );
};
