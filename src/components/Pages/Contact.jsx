const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 mb-10">
      <div className="mb-2">
        <h2 className="font-bold text-[#fafafa] text-2xl border-l-2 pl-2 rounded-3xl border-[#d2bb77]">
          Contact
        </h2>
      </div>
      <div className="flex gap-2 mb-5">
        <p className="text-lg">
          I’d love to hear from you!, Feel free to drop me an email whether
          it’s about work, collaboration, or just sharing ideas, my inbox is
          always open.
        </p>
      </div>
      <div className="">
        <h2 className="text-lg font-bold mb-2 ">
          Want to chat? Schedule a 1:1 with me!
        </h2>
        <p className=" text-lg underline" href="">
          <a href="https://cal.com/hiarun01/15min">Schedule a meet</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
