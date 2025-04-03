const About = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="text-2xl font-bold ">Hey 👋, I'm Arun kumar</h1>
        <p className="mt-5  ">
          Hey, stranger 👋 I'm <strong>Arun Kumar</strong>, Passionate about
          creating beautiful, responsive, and user-friendly web applications
          <br />I love building stuff that solves real world problems which is
          probably why everything I build is Open Source.
        </p>
        <p className="mt-2 ">
          I am always open to new opportunities and connections. Whether you're
          looking for a skilled web developer for your next project or just want
          to network, feel free to reach out. Let's create something amazing
          together.
        </p>{" "}
        <section className="mb-12 mt-12">
          <h2 className="text-lg font-bold text-[#fafafa] mb-6">
            My Tech Stack
          </h2>

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
      </div>
    </>
  );
};

export default About;
