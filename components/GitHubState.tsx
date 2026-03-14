import GitHubCalendar from "react-github-calendar";

const GitHubState = () => {
  return (
    <section className="mt-5">
      {/* GitHub Calendar */}
      <div className="my-8">
        <h2 className="text-lg font-bold mb-5">GitHub Contributions</h2>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="inline-block min-w-full">
            <GitHubCalendar
              username="hiarun02"
              blockSize={10}
              colorScheme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubState;
