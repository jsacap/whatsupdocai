export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">
            AI-Powered Document Analysis
          </h2>
          <p className="text-gray-700 mb-6">
            WhatsUpDocAi uses cutting-edge AI to help you converse with your
            documents, extracting key information effortlessly.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">Instant Insights</h2>
          <p className="text-gray-700 mb-6">
            Upload any PDF and ask questions to get detailed answers. Save time
            and enhance productivity with automated data extraction.
          </p>
        </div>
      </div>
    </section>
  );
}
