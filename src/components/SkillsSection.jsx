import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Software
  { name: "HTML/CSS", level: 95, category: "software" },
  { name: "JavaScript", level: 90, category: "software" },
  { name: "React", level: 90, category: "software" },
  { name: "TypeScript", level: 85, category: "software" },
  { name: "Tailwind CSS", level: 90, category: "software" },
  { name: "Next.js", level: 80, category: "software" },
  { name: "Python", level: 85, category: "software" },
  { name: "C/C++", level: 85, category: "software" },
  { name: "MATLAB", level: 85, category: "software" },
  { name: "AI/ML", level: 85, category: "software" },

  // Electrical
  { name: "Circuit Design", level: 85, category: "electrical" },
  { name: "Electronics/Hardware", level: 75, category: "electrical" },
  { name: "Lab Testing", level: 90, category: "electrical" },
  { name: "Prototpying/Breadboarding", level: 90, category: "electrical" },
  { name: "PCB Design", level: 75, category: "electrical" },
  { name: "Embedded Systems", level: 70, category: "electrical" },
  { name: "Control Systems", level: 75, category: "electrical" },
  { name: "Medical Technology", level: 90, category: "electrical" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "KiCad/Altium", level: 75, category: "tools" },
  { name: "Arduino/Raspberry Pi", level: 90, category: "tools" },
  { name: "VS Code/Xcode", level: 95, category: "tools" },
  { name: "SolidWorks", level: 80, category: "tools" },
];

const categories = ["all", "software", "electrical", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
