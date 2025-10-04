"use client";

import { Card } from "./UI/card";
import { Code2, Users, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description: "Experiencia en tecnologías modernas y mejores prácticas",
  },
  {
    icon: Users,
    title: "Liderazgo",
    description: "Líder de proyectos interdisciplinarios exitosos",
  },
  {
    icon: Lightbulb,
    title: "Autodidacta",
    description: "Aprendizaje continuo y adaptación rápida",
  },
  {
    icon: Target,
    title: "Calidad",
    description: "Enfoque en código escalable y mantenible",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Sobre <span className="text-accent">Mí</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conoce más sobre mi trayectoria y enfoque profesional
            </p>
          </div>

          <Card className="p-8 sm:p-12 bg-card border-border hover:border-accent/50 transition-colors">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Soy un{" "}
                <span className="text-foreground font-semibold">
                  Ingeniero de Sistemas
                </span>{" "}
                con formación universitaria y más de{" "}
                <span className="text-accent font-semibold">
                  cuatro años de experiencia
                </span>{" "}
                en el desarrollo de software. Me destaco por mi rápida
                asimilación de conceptos y habilidades técnicas.
              </p>
              <p>
                Durante mi carrera, he tenido el privilegio de trabajar como{" "}
                <span className="text-foreground font-semibold">
                  tutor en desarrollo de software y programación
                </span>
                , además de liderar proyectos interdisciplinarios como el
                desarrollo de{" "}
                <span className="text-accent font-semibold">
                  aplicaciones de alertas tempranas
                </span>{" "}
                para el municipio de Tunja en colaboración con la alcaldía
                municipal.
              </p>
              <p>
                Mi enfoque{" "}
                <span className="text-foreground font-semibold">
                  autodidacta y empírico
                </span>{" "}
                me ha permitido adquirir y ampliar continuamente mis
                conocimientos en tecnologías modernas. Soy apasionado por la{" "}
                <span className="text-accent font-semibold">
                  resolución de problemas
                </span>
                , la comunicación efectiva y la mejora continua.
              </p>
              <p>
                Me comprometo a ofrecer siempre mi mejor versión en cada función
                que desempeño, con un enfoque en la{" "}
                <span className="text-foreground font-semibold">
                  calidad, escalabilidad y mantenibilidad del código
                </span>
                .
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
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
