const ExperienceSection = () => {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 rounded-lg pl-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Senior Frontend Developer
            </h3>
            <p className="text-gray-600">Company Name • 2022 - Present</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                • Led development of responsive web applications using React and
                Next.js
              </li>
              <li>• Implemented modern UI/UX designs using Tailwind CSS</li>
              <li>
                • Improved application performance by 40% through optimization
                techniques
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Frontend Developer
            </h3>
            <p className="text-gray-600">Previous Company • 2020 - 2022</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                • Developed and maintained multiple client-facing applications
              </li>
              <li>
                • Collaborated with design team to implement pixel-perfect
                interfaces
              </li>
              <li>• Mentored junior developers and led code reviews</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
