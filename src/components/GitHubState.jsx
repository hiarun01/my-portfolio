import GitHubCalendar from "react-github-calendar";
import {motion} from "framer-motion";
const GitHubState = () => {
  return (
    <motion.section
      className="mb-12 mt-5"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.8, duration: 0.5}}
    >
      <div className="my-8">
        <h2 className="text-lg font-bold mb-5 ">GitHub Contributions</h2>
        <GitHubCalendar
          username="hiarun01"
          blockSize={10}
          colorScheme="dark"
          className="w-full"
        />
      </div>
    </motion.section>
  );
};

export default GitHubState;
