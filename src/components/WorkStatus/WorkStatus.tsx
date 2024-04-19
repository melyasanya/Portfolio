export const WorkStatus = () => {
  return (
    <div className="py-[6px] px-[12px] bg-bgGreenStatus flex justify-start items-center gap-[6px] rounded w-fit mb-[24px]">
      <div className="w-[8px] h-[8px] bg-greenStatus rounded-full"></div>
      <p className="text-greenStatus font-medium text-base">
        Available for work
      </p>
    </div>
  );
};
