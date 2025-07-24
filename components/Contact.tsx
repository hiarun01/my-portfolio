/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Let’s Connect</h2>

      <p className="mt-2 text-1xl ">
        Always happy to connect! Reach out via email or Twitter. I'm open to
        freelance gigs or full-time roles. let’s chat if you’ve got something in
        mind!
      </p>
      <div className="mt-5 mb-5">
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4 py-1 w-fit"
        >
          Schedule a meet
        </a>
      </div>
    </div>
  );
}
