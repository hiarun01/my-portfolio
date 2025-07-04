const Contact = () => {
  return (
    <div className="mb-4">
      {/* <h2 className="text-lg font-bold mb-2">Contact</h2> */}

      <p className="mt-2 text-1xl ">
        Always happy to connect! Reach out via email or Twitter. I'm open to
        freelance gigs or full-time roles. let’s chat if you’ve got something in
        mind!
      </p>
      <div className="mt-5">
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline hover:text-[#d2bb77] border px-2 py-2"
        >
          Schedule a meet
        </a>
      </div>
    </div>
  );
};

export default Contact;
