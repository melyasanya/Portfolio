export const WorkStatus = () => {
  return (
    <div className="py-[6px] px-small bg-bgGreenStatus flex justify-start items-center gap-[6px] rounded w-fit mb-base">
      <div className="w-extraSmall h-extraSmall bg-greenStatus rounded-full"></div>
      <p className="text-greenStatus font-medium text-base">
        Available for work
      </p>
    </div>
  );
};
