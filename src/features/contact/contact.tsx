"use client";

import { Card } from "../../shared/UI/card";
import { Button } from "../../shared/UI/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "miguel.botia@example.com",
    href: "mailto:miguel.botia@example.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 300 123 4567",
    href: "tel:+573001234567",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tunja, Colombia",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Hablemos <span className="text-accent">!</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              ¿Tienes un proyecto en mente o quieres colaborar? Estoy siempre
              abierto a nuevas oportunidades y conversaciones interesantes.
            </p>
          </div>

          <Card className="p-8 sm:p-12 bg-card border-border">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <method.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center space-y-6 pt-6 border-t border-border">
                <p className="text-muted-foreground">
                  También puedes encontrarme en:
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className="group bg-transparent">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        <social.icon className="h-5 w-5 mr-2 group-hover:text-accent transition-colors" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6">
                <Button size="lg" asChild className="group">
                  <a href="mailto:miguel.botia@example.com">
                    Envíame un mensaje
                    <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <footer className="text-center pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Miguel Angel Botia Patiño. Diseñado y desarrollado con{" "}
              <span className="text-accent">❤️</span> y{" "}
              <span className="text-accent">código</span>.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
