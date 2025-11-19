export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arun Kumar",
    url: "https://hiarun.me",
    image: "https://hiarun.me/pfp.png",
    sameAs: ["https://github.com/hiarun01", "https://x.com/hiarun01"],
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, Express.js, and Prisma",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Express.js",
      "Prisma",
      "Web Development",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
}
