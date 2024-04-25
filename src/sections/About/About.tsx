import { AboutEducation } from "../../components/AboutEducation/AboutEducation";
import { AboutExperience } from "../../components/AboutExperience/AboutExperience";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { AboutStack } from "../../components/AboutStack/AboutStack";
import { Reveal } from "../../components/Reveal/Reaveal";

export const About = () => {
  return (
    <section>
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <div className="py-medium flex flex-col gap-medium border-b">
          <AboutEducation />
          <AboutStack />
        </div>
      </Reveal>
      <Reveal>
        <AboutExperience />
      </Reveal>
    </section>
  );
};
