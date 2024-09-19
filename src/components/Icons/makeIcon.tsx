import { FC } from "react";
import { IconProps } from "./types";

export const makeIcon = (
  Icon: FC<IconProps>,
  { className }: IconProps = { className: "icons" }
) => {
  const IconComponent: FC = (props) => (
    <Icon className={className} {...props} />
  );
  return IconComponent;
};
