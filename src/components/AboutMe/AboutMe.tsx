import AboutImage from "../../assets/images/avatar.jpg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-base pb-medium border-b">
      <img src={AboutImage} alt="My photo" className="rounded" />
      <div className="flex flex-col gap-base">
        <h1 className="text-extraLarge text-black font-bold leading-none">
          About Me:
          <br />
          Passionate coder, crafting innovative solutions.
        </h1>
        <p className="text-justify text-text text-base font-light">
          Passionate about coding and driven by innovation, I thrive in
          collaborative environments, constantly seeking to craft elegant
          solutions and contribute effectively to dynamic teams. With a keen eye
          for detail and a dedication to continuous learning, I approach each
          project with enthusiasm and a commitment to excellence.
        </p>
      </div>
    </div>
  );
};
