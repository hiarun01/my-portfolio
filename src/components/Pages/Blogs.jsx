const Blogs = () => {
  const blogPosts = [
    {
      title: "Let's Understand CI/CD Pipeline?",
      date: "Feb 27, 2025",
      readTime: "5 min read",
      link: "https://hiarun.hashnode.dev/lets-understand-ci-cd-pipeline",
    },
  ];

  return (
    <section className="mb-10 px-5 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Writting</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className=" border-l-2 rounded-2xl border-[#ffdb70] pl-4"
          >
            <div className="flex items-center justify-between mb-1 ">
              <h3 className="text-xl font-semibold">
                <a href={post.link} className="hover:text-[#d2bb77]">
                  {post.title}
                </a>
              </h3>
              <a
                href={post.link}
                className="text-[#ffdb70] hover:text-[#d2bb77]"
              ></a>
            </div>
            <div className="flex items-center text-[#d6d6d6] text-sm">
              {post.date} • {post.readTime}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
