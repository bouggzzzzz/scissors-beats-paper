import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Controversy = () => {
  const [votes, setVotes] = useState({ legendary: 0, outrageous: 0 });

  const vote = (type: "legendary" | "outrageous") => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const total = votes.legendary + votes.outrageous;
  const legendaryPercentage = total ? Math.round((votes.legendary / total) * 100) : 0;
  const outrageousPercentage = total ? Math.round((votes.outrageous / total) * 100) : 0;

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Elon's Move: Controversial or Genius?</h2>
        
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl mb-8">Legendary or Outrageous? Vote Now!</h3>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <Button
              variant="outline"
              className="h-20 text-xl hover:bg-sbp-blue hover:text-white"
              onClick={() => vote("legendary")}
            >
              Legendary 🚀
            </Button>
            <Button
              variant="outline"
              className="h-20 text-xl hover:bg-sbp-red hover:text-white"
              onClick={() => vote("outrageous")}
            >
              Outrageous 😱
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2">Legendary: {legendaryPercentage}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-sbp-blue h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${legendaryPercentage}%` }}
                ></div>
              </div>
            </div>
            <div>
              <p className="mb-2">Outrageous: {outrageousPercentage}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-sbp-red h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${outrageousPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};