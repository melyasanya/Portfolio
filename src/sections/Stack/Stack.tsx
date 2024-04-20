import { StackItems } from "../../components/StackItems/StackItems";

export const Stack = () => {
  return (
    <section>
      <div className="flex flex-col gap-base pb-base">
        <h1 className="text-black text-extraLarge font-bold">My Skill Stack</h1>
        <StackItems />
      </div>
    </section>
  );
};
