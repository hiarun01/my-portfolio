import GitHubCalendar from "react-github-calendar";

const GitHubState = () => {
  return (
    <section className="mt-5">
      {/* GitHub Calendar */}
      <div className="my-8 ">
        <h2 className="text-lg font-bold mb-5">GitHub Contributions</h2>
        <GitHubCalendar username="hiarun02" blockSize={10} colorScheme="dark" />
      </div>
    </section>
  );
};

export default GitHubState;
