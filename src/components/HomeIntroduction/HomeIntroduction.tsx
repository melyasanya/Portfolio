import { ForwardBtn } from "../ForwardBtn/ForwardBtn";

export const HomeIntroduction = () => {
  return (
    <div className="flex flex-col gap-small pb-medium border-b">
      <h1 className="text-extraLarge text-black font-bold leading-none md:text-[44px]">
        Hey There! <br /> I'm Oleksandr...
      </h1>
      <p className="text-justify text-text text-base font-light md:max-w-[380px] md:text-middle">
        Passionate about coding and driven by innovation, I thrive in
        collaborative environments, constantly seeking to craft elegant
        solutions and contribute effectively to dynamic teams.
      </p>
      <ForwardBtn
        navLink="about"
        content="More about Me"
        className="md:w-[200px] md:mt-base"
      />
    </div>
  );
};
