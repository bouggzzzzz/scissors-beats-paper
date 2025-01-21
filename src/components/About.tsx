import { Trophy } from "lucide-react";

export const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-sbp-red" />
          <h2 className="text-4xl font-bold mb-4">The Meme. The Move. The Coin.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl">
              What happens when a controversial gesture becomes a viral moment? A meme is born.
              And now, it's a coin cutting through the market!
            </p>
            <p className="text-lg text-gray-600">
              The internet never forgets, and neither will we. Join the movement!
            </p>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Meme Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-sbp-red"></div>
                  <p>The Controversial Moment</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-sbp-blue"></div>
                  <p>Internet Explosion</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-sbp-gray"></div>
                  <p>$SBP Launch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/6b8af890-922a-45cc-bcf4-2f833e8fb705.png" 
              alt="Scissors Beats Paper Meme" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};