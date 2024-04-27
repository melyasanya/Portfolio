import AboutImage from "../../assets/images/avatar.jpg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-base pb-medium border-b md:grid md:grid-cols-2 ">
      <img
        src={AboutImage}
        alt="My photo"
        className="rounded md:w-full md:h-full md:order-last md:object-cover md:max-h-[528px] xl:max-h-[454px]"
      />
      <div className="flex flex-col gap-base ">
        <h1>
          About Me:
          <br />
          Passionate coder, crafting innovative solutions.
        </h1>
        <p className="text-justify text-text text-base font-light md:text-middle">
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
