import { FC } from "react";

import { IconAppName } from "./constants";
import { makeIcon } from "./makeIcon";
import { IconInstance } from "./sources";

type Icon = {
  [Key in IconAppName]: FC;
};

export const Icon: Icon = {
  [IconAppName.ABOUT]: makeIcon(IconInstance.GoPerson),
  [IconAppName.ARROW]: makeIcon(IconInstance.MdArrowOutward),
  [IconAppName.CHECKMARK]: makeIcon(IconInstance.IoIosCheckmark, {
    className: "w-[32px] h-[32px] text-greenStatus ",
  }),
  [IconAppName.CLOSE]: makeIcon(IconInstance.IoIosClose, {
    className: "w-[32px] h-[32px] text-error",
  }),
  [IconAppName.CONTACT]: makeIcon(IconInstance.GoRead),
  [IconAppName.DOWNLOAD]: makeIcon(IconInstance.GoDownload),
  [IconAppName.FORWARD]: makeIcon(IconInstance.IoIosArrowRoundForward),
  [IconAppName.GITHUB]: makeIcon(IconInstance.FaGithubSquare),
  [IconAppName.HOME]: makeIcon(IconInstance.GoHome),
  [IconAppName.INSTAGRAM]: makeIcon(IconInstance.FaInstagram),
  [IconAppName.LINKEDIN]: makeIcon(IconInstance.FaLinkedin),
  [IconAppName.MAIL]: makeIcon(IconInstance.CiMail),
  [IconAppName.PHONE]: makeIcon(IconInstance.CiPhone),
  [IconAppName.PROJECTS]: makeIcon(IconInstance.GoBriefcase),
  [IconAppName.STACK]: makeIcon(IconInstance.GoStack),
  [IconAppName.TELEGRAM]: makeIcon(IconInstance.FaTelegram),
};
