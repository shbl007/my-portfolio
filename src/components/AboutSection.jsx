import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer & Interface Engineer
            </h3>

            <p className="text-muted-foreground">
              With a background in Information Technology and a strong focus on modern web technologies, I specialize in building clean, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.
            </p>

            <p className="text-muted-foreground">
              I transform complex ideas into scalable, modular, and maintainable code — pixel by pixel, component by component. My work emphasizes performance optimization, smooth micro-interactions with Framer Motion, and attention to detail. Recent projects include Thrifty, a seamless car leasing platform for Dubai, where I delivered a fast, lightweight, and engaging user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/projects/shibil-resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                download={"/projects/shibil-resume.pdf"}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable, performant, and maintainable web applications with React, Next.js, and modern frontend stacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Interface Implementation</h4>
                  <p className="text-muted-foreground">
                    Translating design concepts into pixel-perfect, production-ready interfaces with a focus on responsiveness and accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Architecture</h4>
                  <p className="text-muted-foreground">
                    Developing modular component systems, ensuring clean codebases, and optimizing performance from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
