import { IconType } from "react-icons";

import {
  HiLink,
  HiOutlineBookOpen,
  HiOutlineLink,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import {
  BsGithub,
  BsLinkedin
} from "react-icons/bs";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  book:HiOutlineBookOpen,
  link: HiLink,
  github:BsGithub,
  linkedin:BsLinkedin,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;