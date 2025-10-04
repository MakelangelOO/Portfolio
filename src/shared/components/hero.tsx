"use client";

import { ArrowDown, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "../UI/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-accent font-mono text-sm sm:text-base">
              Hola, mi nombre es
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Miguel Angel Botia Patiño
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground text-balance">
              Ingeniero Full Stack Developer
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Ingeniero de sistemas con{" "}
            <span className="text-accent font-semibold">
              4 años de experiencia
            </span>{" "}
            en desarrollo de software. Apasionado por crear soluciones
            escalables, mantenibles y de alta calidad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <a href="#contact">
                Contáctame
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#about">
                Conoce más
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:miguel@example.com"
              className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
