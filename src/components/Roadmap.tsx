import { Rocket, Scissors, Sword, Moon } from "lucide-react";

const STAGES = [
  {
    icon: Scissors,
    title: "Scissors Go Viral 🚀",
    description: "Coin launch and meme propagation",
  },
  {
    icon: Rocket,
    title: "Cut the Paper 📰",
    description: "Community building and partnerships",
  },
  {
    icon: Sword,
    title: "Scissors Domination ⚔️",
    description: "Exchange listings and ecosystem growth",
  },
  {
    icon: Moon,
    title: "Shred to the Moon 🌕",
    description: "Major milestones and rewards",
  },
];

export const Roadmap = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">From Meme to Moon: The $SBP Journey</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAGES.map((stage, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <stage.icon className="w-12 h-12 mx-auto mb-4 text-sbp-red" />
              <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};