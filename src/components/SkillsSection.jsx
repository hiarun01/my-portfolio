const SkillsSection = () => {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="font-semibold text-gray-900">Frontend</h3>
            <p className="text-gray-600">Javascript, React, Css, Tailwind</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="font-semibold text-gray-900">Backend</h3>
            <p className="text-gray-600">Node.js, Express, MongoDB</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="font-semibold text-gray-900">Dev Tools</h3>
            <p className="text-gray-600">Git, Figma, Wordpress, Vercel </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
