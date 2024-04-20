import MyPhoto from "../../assets/images/avatar.jpg";

export const Introduction = () => {
  return (
    <div className="flex gap-extraSmall">
      <img
        src={MyPhoto}
        alt="My photo"
        className="w-medium h-medium rounded border"
      />
      <div>
        <p className="text-medium font-medium text-black">
          Oleksandr Melnychenko
        </p>
        <p className="text-text text-base">Full-Stack Developer</p>
      </div>
    </div>
  );
};
