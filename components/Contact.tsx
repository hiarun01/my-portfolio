/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Let’s Connect</h2>

      <p className="mt-2 ">
        Always happy to connect! Reach out via email or Twitter. I'm open to
        freelance gigs or full-time roles. let’s chat if you’ve got something in
        mind!
      </p>
      <div className="mt-2 mb-5">
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffdb70] hover:text-[#d2bb77]  border-b-1 mt-2"
        >
          <span> Schedule a meet</span>
        </a>
      </div>
      <div className="mb-5">
        <h2 className="text-lg font-bold mb-2">Support Me</h2>
        <p>
          If you love what I do, whether it’s my work, the content I share, or
          anything else, please consider supporting me. Your support helps me
          continue creating, improving, and sharing my work.
        </p>
      </div>
    </div>
  );
}
