export default function Footer() {
  return (
    <footer className="bg-heroBg text-primary py-8 font-grotesk">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-indigo-400">
            Privacy Policy
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-center">
          <a
            href="https://sanchojralegre.com"
            target="_blank"
            className="hover:text-indigo-400"
          >
            Built by JSAX
          </a>
        </div>

        <p className="mt-4 md:mt-0 text-sm text-right">
          &copy; 2024 WhatsUpDocAi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
