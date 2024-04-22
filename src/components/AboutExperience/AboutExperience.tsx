import { AboutBtn } from "../AboutBtn/AboutBtn";
import { ExperienceItems } from "../ExperienceItems/ExperienceItems";

export const AboutExperience = () => {
  return (
    <div className="py-medium flex flex-col gap-base">
      <h2 className="aboutHeader">Experience</h2>
      <ExperienceItems />
      <AboutBtn navLink="contact" content="Contact Me" />
    </div>
  );
};
