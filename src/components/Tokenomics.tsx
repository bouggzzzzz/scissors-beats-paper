import { DollarSign } from "lucide-react";

export const Tokenomics = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Tokenomics Sharp as Scissors</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-sbp-blue" />
            <h3 className="text-2xl font-bold mb-2">Total Supply</h3>
            <p className="text-gray-600">Enough to slice through the FUD</p>
            <p className="text-xl font-bold mt-4">1,000,000,000,000</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-sbp-red" />
            <h3 className="text-2xl font-bold mb-2">Tax</h3>
            <p className="text-gray-600">Cutting-edge—just 2%</p>
            <p className="text-xl font-bold mt-4">2%</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-sbp-blue" />
            <h3 className="text-2xl font-bold mb-2">Redistribution</h3>
            <p className="text-gray-600">Goes to the Scissors Army</p>
            <p className="text-xl font-bold mt-4">1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};