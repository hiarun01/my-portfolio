/* eslint-disable react/no-unescaped-entities */
import Skills from "./Skills";

type Social = {
  href: string;
  label: string;
};

const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
  },
  {
    href: "https://x.com/hiarun01",
    label: "X",
  },
  {
    href: "https://www.linkedin.com/in/hiarun01/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
  },
];

export default function About() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold ">Hey👋, I'm Arun kumar</h1>
      <div className="flex gap-2 mt-3 w-fit sm:font-normal">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-[#ffdb70] text-sm hover:text-[#d2bb77] border px-1 rounded-lg "
            aria-label={s.label}
          >
            {s.label}
          </a>
        ))}
      </div>
      <p className="mt-5 text-1xl ">
        A web dev, I love building things that solves real world problems. which
        is why most of what I build is open source.
      </p>
      <p className="mt-5 text-1xl">
        My journey into web development started with curiosity and quickly
        turned into a full-blown passion. Since then, I’ve been building,
        experimenting, and learning something new every day.
      </p>

      <Skills />
    </div>
  );
}
