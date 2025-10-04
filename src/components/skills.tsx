"use client";

import { Card } from "./UI/card";
import { Badge } from "./UI/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "Linux",
      "Nginx",
      "Jest",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Liderazgo",
      "Trabajo en Equipo",
      "Comunicación",
      "Resolución de Problemas",
      "Mentoría",
      "Gestión de Proyectos",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Habilidades <span className="text-accent">&</span> Tecnologías
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo día a día
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent/50 transition-all group">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-accent rounded-full" />
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
