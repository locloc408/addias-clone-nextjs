import { FC } from "react";
export interface mainMenuMobile {
  NavItems: any[];
  Icon: FC;
  check: number;
}
export interface HoverType {
  hover: boolean | number | null;
}
export interface mobileNav {
  anchor: "left" | "top" | "right" | "bottom";
  check: number;
  Icon: FC;
  Name: string;
  NavItems: any[];
}
export interface MainMenus {
  NavItems: any[];
}
export interface NavItems {
  type: string;
  status: string[];
  id: string;
}
