import { StackItems } from "../../components/StackItems/StackItems";

export const Stack = () => {
  return (
    <section>
      <div className="flex flex-col gap-[24px] pb-[24px]">
        <h1 className="text-black text-[36px] font-bold">My Skill Stack</h1>
        <StackItems />
      </div>
    </section>
  );
};
