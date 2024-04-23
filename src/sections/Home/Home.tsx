import { HomeIntroduction } from "../../components/HomeIntroduction/HomeIntroduction";
import { HomeProjects } from "../../components/HomeProjects/HomeProjects";
import { HomeStack } from "../../components/HomeStack/HomeStack";

export const Home = () => {
  return (
    <section>
      <div>
        <HomeIntroduction />
        <HomeProjects />
        <HomeStack />
      </div>
    </section>
  );
};
