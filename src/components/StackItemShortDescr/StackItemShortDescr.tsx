interface StackItemShortDescrProps {
  logo: string;
  name: string;
  shortDescr: string;
}

export const StackItemShortDescr: React.FC<StackItemShortDescrProps> = ({
  logo,
  name,
  shortDescr,
}) => {
  return (
    <div className="flex gap-small items-center">
      <img src={logo} alt={`${name} logo`} className="w-[44px] h-[44px]" />
      <div>
        <p className="text-medium font-semibold text-black">{name}</p>
        <p className="text-base font-light text-text">{shortDescr}</p>
      </div>
    </div>
  );
};
