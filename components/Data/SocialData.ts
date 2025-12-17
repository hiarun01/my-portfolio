import {FaXTwitter} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {ComponentType} from "react";

export type Social = {
  href: string;
  label: string;
  icon: ComponentType;
};

export const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: SiGmail,
  },
  {
    href: "https://x.com/hiarun02",
    label: "X",
    icon: FaXTwitter,
  },
  {
    href: "https://github.com/hiarun02",
    label: "GitHub",
    icon: FaGithub,
  },
];
