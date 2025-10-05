"use client";

import { Card } from "../../shared/UI/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Navigation } from "../../shared/components/navigation";

const education = [
  {
    icon: GraduationCap,
    degree: "Ingeniería de Sistemas",
    institution: "Universidad",
    period: "2017 - 2022",
    description:
      "Formación universitaria en ingeniería de sistemas con enfoque en desarrollo de software y arquitectura de sistemas.",
  },
  {
    icon: Award,
    degree: "Certificaciones Profesionales",
    institution: "Plataformas Online",
    period: "2020 - Presente",
    description:
      "Certificaciones en tecnologías modernas como React, Node.js, AWS, y metodologías ágiles.",
  },
  {
    icon: BookOpen,
    degree: "Aprendizaje Continuo",
    institution: "Autodidacta",
    period: "Continuo",
    description:
      "Constante actualización en nuevas tecnologías, frameworks y mejores prácticas de desarrollo.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Educación <span className="text-accent">&</span> Formación
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mi formación académica y desarrollo profesional continuo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.degree}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.institution}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
