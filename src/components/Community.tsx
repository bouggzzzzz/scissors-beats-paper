import { Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Community = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Elon's Scissors, Your Movement</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Join the revolution and become part of the fastest-growing meme coin community!
        </p>
        
        <div className="flex justify-center space-x-6">
          <Button
            size="lg"
            className="bg-[#1DA1F2] hover:bg-[#1a8cd8]"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <Twitter className="mr-2" />
            Join Twitter
          </Button>
          <Button
            size="lg"
            className="bg-[#5865F2] hover:bg-[#4752c4]"
            onClick={() => window.open("https://discord.com", "_blank")}
          >
            <MessageSquare className="mr-2" />
            Join Discord
          </Button>
        </div>
      </div>
    </div>
  );
};