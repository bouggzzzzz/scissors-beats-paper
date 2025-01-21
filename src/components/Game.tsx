import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PUNCHLINES = [
  "Elon called it: Paper is no match!",
  "Cut through the FUD – Scissors FTW!",
  "Paper's down. What's next? The moon!",
  "Scissors sharp, paper flat!",
];

export const Game = () => {
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const playGame = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setScore(score + 1);
      const randomPunchline = PUNCHLINES[Math.floor(Math.random() * PUNCHLINES.length)];
      toast({
        title: "Victory!",
        description: randomPunchline,
      });
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">The Ultimate Scissors Showdown</h2>
        <p className="text-xl mb-12">Prove Scissors Always Win!</p>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-8">✌️</div>
          <p className="text-2xl mb-4">Your Score: {score}</p>
          <Button
            size="lg"
            className="bg-sbp-red text-white hover:bg-sbp-blue"
            onClick={playGame}
            disabled={isAnimating}
          >
            <Scissors className={`mr-2 ${isAnimating ? "animate-cut" : ""}`} />
            Cut Paper!
          </Button>
        </div>
      </div>
    </div>
  );
};