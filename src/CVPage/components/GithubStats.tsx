import data from '../../config/CVData';

const statsUrlDark = `https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&count_private=true&hide_border=true&show_icons=true&hide_title=true&hide=contribs&theme=github_dark`;
const statsUrlLight = `https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&count_private=true&hide_border=true&show_icons=true&hide_title=true&hide=contribs`;
const GithubStats = () => (
  <div className="my-2 w-full flex justify-center">
    <img src={statsUrlLight} alt="Github stats" className="dark:hidden" />
    <img src={statsUrlDark} alt="Github stats" className="hidden dark:block" />
  </div>
);

export default GithubStats;
