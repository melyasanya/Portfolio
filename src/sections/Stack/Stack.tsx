import { Reveal } from "../../components/Reveal/Reaveal";
import { StackItems } from "../../components/StackItems/StackItems";

export const Stack = () => {
  return (
    <section>
      <Reveal>
        <div className="flex flex-col gap-base pb-base">
          <h1 className="text-black text-extraLarge font-bold md:text-[44px] xl:text-[52px]">
            My Skill Stack
          </h1>
          <StackItems />
        </div>
      </Reveal>
    </section>
  );
};
