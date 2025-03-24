const Skills = () => {
  return (
    <>
      <section className="mb-12 mt-12">
        <h2 className="text-lg font-bold text-[#fafafa] mb-6">My Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1 gap-2">
          <div className="border border-[#ffdb70] rounded-lg p-4 bg-transparent">
            <h3 className="font-semibold text-[#d6d6d6]">Frontend</h3>
            <p className="text-[#d6d6d6]">Javascript, React, Css, Tailwind</p>
          </div>
          <div className="border border-[#ffdb70] rounded-lg p-4 bg-transparent">
            <h3 className="font-semibold text-[#d6d6d6]">Backend</h3>
            <p className="text-[#d6d6d6]">Node.js, Express, MongoDB</p>
          </div>
          <div className="border border-[#ffdb70] rounded-lg p-4 bg-transparent">
            <h3 className="font-semibold text-[#d6d6d6]">Dev Tools</h3>
            <p className="text-[#d6d6d6]">Git, Figma, Wordpress, Vercel </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
