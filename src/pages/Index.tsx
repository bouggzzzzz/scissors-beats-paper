import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Game } from "@/components/Game";
import { Controversy } from "@/components/Controversy";
import { Roadmap } from "@/components/Roadmap";
import { Tokenomics } from "@/components/Tokenomics";
import { Community } from "@/components/Community";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Game />
      <Controversy />
      <Roadmap />
      <Tokenomics />
      <Community />
    </div>
  );
};

export default Index;