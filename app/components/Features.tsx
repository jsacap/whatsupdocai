export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1: Multiple Chat Rooms */}
        <div className="bg-[#e0e0db] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Multiple Chat Rooms</h2>
          <p className="text-gray-700 mb-6">
            Have multiple chat rooms with your documents and your AI assistant
            so you can switch between tasks and projects seamlessly.
          </p>
          <a href="#" className="text-primary hover:underline">
            Learn more
          </a>
        </div>

        {/* Feature 2: Upload PDFs */}
        <div className="bg-[#e0e0db] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Upload Any PDF</h2>
          <p className="text-gray-700 mb-6">
            Upload any PDF document and let the AI assistant do its thinking. It
            will analyze the document to provide you with the insights you need.
          </p>
          <a href="#" className="text-primary hover:underline">
            Learn more
          </a>
        </div>

        {/* Feature 3: Start Chatting */}
        <div className="bg-[#e0e0db] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Chat with AI</h2>
          <p className="text-gray-700 mb-6">
            Start chatting with your AI assistant. Ask it anything, and it'll
            scan through your uploaded data to provide accurate and fast
            answers.
          </p>
          <a href="#" className="text-primary hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
