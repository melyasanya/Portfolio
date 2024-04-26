import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { ExperienceItems } from "../ExperienceItems/ExperienceItems";

export const AboutExperience = () => {
  return (
    <div className="py-medium flex flex-col gap-base">
      <h2 className="aboutHeader">Experience</h2>
      <ExperienceItems />
      <ForwardBtn
        navLink="contact"
        content="Contact Me"
        className="md:w-fit md:px-small xl:px-base"
      />
    </div>
  );
};
