import MyPhoto from "../../assets/images/avatar.jpg";

export const Introduction = () => {
  return (
    <div className="flex gap-extraSmall md:flex-col md:gap-small md:items-center md:pb-base md:border-b">
      <img
        src={MyPhoto}
        alt="My photo"
        className="w-medium h-medium rounded border md:w-[68px] md:h-[68px]"
      />
      <div>
        <p className="text-medium font-semibold text-black md:text-center">
          Oleksandr Melnychenko
        </p>
        <p className="text-text text-base md:text-center">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};
