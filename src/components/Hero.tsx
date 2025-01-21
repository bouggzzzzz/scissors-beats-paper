import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sbp-red to-sbp-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <Scissors className="w-24 h-24 mx-auto mb-8 animate-float text-white" />
        <h1 className="text-6xl font-bold mb-6">
          When Scissors Beat Paper, <br />
          the Internet Wins!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          From viral moment to Web3 revolution. Join the movement.
        </p>
        <Button
          size="lg"
          className="bg-white text-sbp-red hover:bg-sbp-red hover:text-white transition-colors"
          onClick={() => window.open("https://pump.fun", "_blank")}
        >
          Cut Through the Noise – Buy Now on Pump.fun!
        </Button>
      </div>
    </div>
  );
};