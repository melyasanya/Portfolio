import { HomeIntroduction } from "../../components/HomeIntroduction/HomeIntroduction";
import { HomeProjects } from "../../components/HomeProjects/HomeProjects";
import { HomeStack } from "../../components/HomeStack/HomeStack";
import { Reveal } from "../../components/Reveal/Reaveal";

export const Home = () => {
  return (
    <section>
      <div>
        <Reveal>
          <HomeIntroduction />
        </Reveal>
        <Reveal>
          <HomeProjects />
        </Reveal>
        <Reveal>
          <HomeStack />
        </Reveal>
      </div>
    </section>
  );
};
