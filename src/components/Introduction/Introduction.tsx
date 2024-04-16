import MyPhoto from "../../assets/images/avatar.jpg";

export const Introduction = () => {
  return (
    <div className="flex gap-[8px]">
      <img
        src={MyPhoto}
        alt="My photo"
        className="w-[48px] h-[48px] rounded border"
      />
      <div>
        <p className="text-[18px] font-medium ">Oleksandr Melnychenko</p>
        <p className="text-accent text-[14px]">Full-Stack Developer</p>
      </div>
    </div>
  );
};
