import { AboutEducation } from "../../components/AboutEducation/AboutEducation";
import { AboutExperience } from "../../components/AboutExperience/AboutExperience";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { AboutStack } from "../../components/AboutStack/AboutStack";

export const About = () => {
  return (
    <section>
      <AboutMe />
      <div className="py-medium flex flex-col gap-medium">
        <AboutEducation />
        <AboutStack />
      </div>
      <AboutExperience />
    </section>
  );
};
