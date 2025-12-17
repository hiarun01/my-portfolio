export type Hackathon = {
  title: string;
  description: string;
  date: string;
  logo: string;
  github?: string;
  live?: string;
};

export const hackathons: Hackathon[] = [
  {
    title: "Code with Kiro Hackathon",
    description:
      "Built Rapid Report platform that lets people quickly and securely report emergencies. It ensures fast response, protects user privacy, and offers full anonymity whenever needed",
    date: "Aug 1rd - Sep 15th, 2025",
    // organizer: "Auraflix",
    logo: "K",
    github: "https://github.com/hiarun02/auraflix-hackathon",
    live: "https://auraflix-demo.com",
  },
  {
    title: "Adobe Express Add-ons Hackathon",
    description:
      "Developed a color palette generator for Adobe Express. It helps users quickly generate beautiful, ready-to-use color palettes based on user Prompt.",
    date: "May 19rd - Jul 21th, 2025",
    // organizer:"",
    logo: "A",
    github: "",
    live: "",
  },
];
