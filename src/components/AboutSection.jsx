import { CircuitBoard, Code, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Electrical Engineering Student at the University of British Columbia
            </h3>

            <p className="text-muted-foreground">
              I have a broad skillset in software and hardware development,
              systems design, AI, and leadership. My diverse experiential background
              has given me a unique perspective and ability to approach problems.
            </p>

            <p className="text-muted-foreground">
              I'm interested in the applications of AI and real-time systems
              to medical devices and healthcare. I'm currently working on several projects,
              which can be found in my projects section. Don't hesitate to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
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
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems Design</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing digital systems, PCB design, circuit analysis,
                    embedded systems design, prototyping, and testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive UI and seamless UX, mobile app development,
                    scripting, full-stack development, ML algorithms, and AI engineering.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Entrepreneruship</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion, utilizing tech stacks,
                    working with teams, realizing ideas to real world applications.
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
