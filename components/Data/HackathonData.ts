export type Hackathon = {
  title: string;
  description: string;
  date: string;
  logo: string;
};

export const hackathons: Hackathon[] = [
  {
    title: "Adobe Express Add-ons Hackathon",
    description:
      "Developed a color palette generator for Adobe Express. It helps users quickly generate beautiful, ready-to-use color palettes based on user Prompt.",
    date: "May 19rd - Jul 21th, 2025",
    logo: "/adobe.jpg",
  },
  {
    title: "Code with Kiro Hackathon",
    description:
      "Built Rapid Report platform that lets people quickly and securely report emergencies. It ensures fast response, protects user privacy, and offers full anonymity whenever needed",
    date: "Aug 1rd - Sep 15th, 2025",
    logo: "/kiro.png",
  },
  {
    title: "Kiroween Hackathon",
    description:
      "i built KiroCore is a universal AI agent platform that transforms a single codebase into multiple specialized applications through configuration files.",
    date: "Oct 31st - Dec 6th, 2025",
    logo: "/kiro.png",
  },
];
