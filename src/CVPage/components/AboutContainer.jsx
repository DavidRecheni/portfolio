import Header from '../../core/components/Header';

export default function AboutContainer() {
  return (
    <div className="flex flex-col">
      <Header>About me</Header>
      <div className="flex justify-start">
        <p className="max-w-prose text-justify text-sm sm:text-base">
          Hallo! I’m a 30 y.o. Argentinian that lives in Berlin since February 2020.
          I’m always eager to learn new things. I feel comfortable accepting responsibilities and
          coordinating teams. Due to my studies as Designer and Dev, and my long experience working
          as freelancer, I can ideate, design, develop and deploy solutions from scratch.
          I’ve worked as Full-stack developer most of my carreer but I decided to specialize in
          Frontend. I’ve been working exclusively with React since I arrived to Germany
        </p>
      </div>
    </div>
  );
}
