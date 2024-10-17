import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Plan */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-6xl font-bold mb-4">$0</p>
            <p className="mb-6">
              Try for free with 1 document and 1 chat room. Max 5 prompts.
            </p>
            <ul className="mb-6">
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />1 Document
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />1 Chat Room
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />5 Prompts Max
              </li>
            </ul>
            <button className="px-6 py-3 bg-[#253551] text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Bi-Weekly Plan */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">$5 Bi-Weekly</h3>
            <p className="text-6xl font-bold mb-4">$5</p>
            <p className="mb-6">
              Billed every 2 weeks. 5 chatrooms, upload 5 documents, unlimited
              prompts.
            </p>
            <ul className="mb-6">
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />5 Documents
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />5 Chat Rooms
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Unlimited Prompts
              </li>
            </ul>
            <button className="px-6 py-3 bg-[#253551] text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
              Choose Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">$15 Monthly</h3>
            <p className="text-6xl font-bold mb-4">$15</p>
            <p className="mb-6">
              Unlimited chat rooms, unlimited document uploads, unlimited
              prompts.
            </p>
            <ul className="mb-6">
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Unlimited Documents
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Unlimited Chat Rooms
              </li>
              <li className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Unlimited Prompts
              </li>
            </ul>
            <button className="px-6 py-3 bg-[#253551] text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
