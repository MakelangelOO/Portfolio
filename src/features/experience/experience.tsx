"use client";

import { Card } from "../../shared/UI/card";
import { Badge } from "../../shared/UI/badge";
import { Briefcase, Calendar } from "lucide-react";
import { Navigation } from "../../shared/components/navigation";

const experiences = [
  {
    title: "Líder de Proyecto - Alertas Tempranas",
    company: "Alcaldía Municipal de Tunja",
    period: "2023 - 2024",
    description:
      "Lideré el desarrollo de una aplicación de alertas tempranas para el municipio de Tunja, coordinando equipos interdisciplinarios y asegurando la entrega exitosa del proyecto.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Tutor de Desarrollo de Software",
    company: "Universidad / Institución Educativa",
    period: "2022 - 2024",
    description:
      "Impartí tutorías en desarrollo de software y programación, ayudando a estudiantes a comprender conceptos fundamentales y avanzados de programación.",
    technologies: ["JavaScript", "Python", "React", "Git", "Algoritmos"],
  },
  {
    title: "Desarrollador Full Stack",
    company: "Proyectos Freelance",
    period: "2021 - Presente",
    description:
      "Desarrollo de aplicaciones web completas para diversos clientes, desde la concepción hasta el despliegue, con enfoque en calidad y escalabilidad.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Experiencia <span className="text-accent">Laboral</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mi trayectoria profesional y proyectos destacados
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/20 hidden sm:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-accent border-4 border-background hidden sm:block -translate-x-[5px]" />

                <Card className="sm:ml-8 p-6 sm:p-8 bg-card border-border hover:border-accent/50 transition-all group">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-accent/30 text-accent hover:bg-accent/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
