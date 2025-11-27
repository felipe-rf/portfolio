import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-gray-200 mb-12">
          I'm open for new oportunities and projects, feel free to reach out!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/felipe-rf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm hover:bg-gray-200 text-gray-900 rounded-full transition-all font-medium"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/felipe-rodrigo-ferreira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm hover:bg-gray-200 text-gray-900 rounded-full transition-all font-medium"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:felipeferreira.rodrigo@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm hover:bg-gray-200 text-gray-900 rounded-full transition-all font-medium"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
