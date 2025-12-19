import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyExperience from "../components/MyExperience";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = {
    frontend: [
      {
        title: "D&D Initiative Tracker",
        description: "Tool for tracking combat initiative in tabletop RPGs.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/InitativeTracker.png",
        url: "https://felipe-rf.github.io/initiative-tracker/?data=JTVCJTdCJTIybmFtZSUyMiUzQSUyMkljY2FyaW9uJTIyJTJDJTIybWF4SHAlMjIlM0E0MCUyQyUyMmN1cnJlbnRIcCUyMiUzQTIwJTJDJTIydGVtcEhwJTIyJTNBNSUyQyUyMmFjJTIyJTNBMTUlMkMlMjJpbml0aWF0aXZlJTIyJTNBMTAlMkMlMjJsaW5rJTIyJTNBJTIyJTIyJTJDJTIyZGVhZCUyMiUzQWZhbHNlJTJDJTIyY29sb3IlMjIlM0ElMjIlMjM4MTNkOWMlMjIlMkMlMjJpZCUyMiUzQTIlN0QlMkMlN0IlMjJuYW1lJTIyJTNBJTIyVGFlbCUyMiUyQyUyMm1heEhwJTIyJTNBMzAlMkMlMjJjdXJyZW50SHAlMjIlM0ExNSUyQyUyMnRlbXBIcCUyMiUzQTAlMkMlMjJhYyUyMiUzQTE1JTJDJTIyaW5pdGlhdGl2ZSUyMiUzQTYlMkMlMjJsaW5rJTIyJTNBJTIyJTIyJTJDJTIyZGVhZCUyMiUzQWZhbHNlJTJDJTIyY29sb3IlMjIlM0ElMjIlMjNkYzhhZGQlMjIlMkMlMjJpZCUyMiUzQTElN0QlMkMlN0IlMjJuYW1lJTIyJTNBJTIyVmlrdG9yJTIyJTJDJTIybWF4SHAlMjIlM0EyMCUyQyUyMmN1cnJlbnRIcCUyMiUzQTIwJTJDJTIydGVtcEhwJTIyJTNBMCUyQyUyMmFjJTIyJTNBMTMlMkMlMjJpbml0aWF0aXZlJTIyJTNBNSUyQyUyMmxpbmslMjIlM0ElMjIlMjIlMkMlMjJkZWFkJTIyJTNBZmFsc2UlMkMlMjJjb2xvciUyMiUzQSUyMiUyM2Y2NjE1MSUyMiUyQyUyMmlkJTIyJTNBMyU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJHb2JsaW4lMjIlMkMlMjJtYXhIcCUyMiUzQTEwJTJDJTIyY3VycmVudEhwJTIyJTNBNCUyQyUyMnRlbXBIcCUyMiUzQTAlMkMlMjJhYyUyMiUzQTEyJTJDJTIyaW5pdGlhdGl2ZSUyMiUzQTAlMkMlMjJsaW5rJTIyJTNBJTIyJTIyJTJDJTIyZGVhZCUyMiUzQWZhbHNlJTJDJTIyY29sb3IlMjIlM0ElMjIlMjNmZmZmZmYlMjIlMkMlMjJpZCUyMiUzQTQlN0QlMkMlN0IlMjJuYW1lJTIyJTNBJTIyR29ibGluJTIyJTJDJTIybWF4SHAlMjIlM0ExMCUyQyUyMmN1cnJlbnRIcCUyMiUzQTAlMkMlMjJ0ZW1wSHAlMjIlM0EwJTJDJTIyYWMlMjIlM0EwJTJDJTIyaW5pdGlhdGl2ZSUyMiUzQTAlMkMlMjJsaW5rJTIyJTNBJTIyJTIyJTJDJTIyZGVhZCUyMiUzQXRydWUlMkMlMjJjb2xvciUyMiUzQSUyMiUyMzI2YTI2OSUyMiUyQyUyMmlkJTIyJTNBNSU3RCU1RA%3D%3D",
      },
      {
        title: "Villager Birthday finder",
        description: "Tool for finding villager birthdays in Animal Crossing.",
        tags: ["React", "TypeScript", "MaterialUI"],
        image: "/villager.png",
        url: "https://felipe-rf.github.io/villager-birthday-finder/",
      },
      {
        title: "This Website :D",
        description:
          "Personal portfolio website to showcase my projects and skills.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/Portfolio.png",
        url: "https://github.com/felipe-rf",
      },
    ],
    gamedev: [
      {
        title: "Breakout Clone",
        description: "Breakout clone made with Godot Engine.",
        tags: ["Godot", "Arcade", "2D"],
        image: "/Breakout.png",
        url: "https://feliper.itch.io/breakout",
      },
      {
        title: "Frog Game",
        description: "2D Platformer with fun moveset and 3 levels.",
        tags: ["Godot", "Platformer", "2D"],
        image: "/FrogGame.png",
        url: "https://feliper.itch.io/froggame",
      },
      {
        title: "GDRPG",
        description: "Turn-based RPG made with Godot Engine.",
        tags: ["Godot", "RPG", "2D"],
        image: "/GDRPG.png",
        url: "https://feliper.itch.io/gdrpg",
      },
    ],
    design: [
      {
        title: "Homy",
        description: "Academic project for a house searching website.",
        tags: ["Figma", "UI/UX", "Responsive"],
        image: "/Homy.png",
        url: "https://www.figma.com/design/e9qMp2hQje3XhVaSxNwkaN/Homy-UX---High?node-id=0-1&t=GfUbpjLWDMWDvP3F-1",
      },
      {
        title: "Green Basket",
        description:
          "Mobile app for buying groceries with a focus on sustainability.",
        tags: ["Figma", "UI/UX", "Mobile"],
        image: "/GreenBasket.png",
        url: "https://www.figma.com/design/asIF6W6UtXea1itJhkZxwi/requisitos?node-id=33-444&t=GfUbpjLWDMWDvP3F-1",
      },
    ],
  };

  const experiences = {
    education: [
      {
        title: "Bachelor's in Software Engineering",
        institution: "Federal University of Technology - Paraná (UTFPR)",
        period: "2023 - Present",
        description: "",
        type: "education" as const,
        location: "Dois Vizinhos, PR - Brazil",
        achievements: [],
      },
    ],
    work: [
      {
        title: "DevOps Intern",
        institution: "Aprenda Certo / Brightminds Devops",
        period: "Dec 2024 - Oct 2025",
        description:
          "Gained practical experience in DevOps practices including CI/CD pipeline implementation, infrastructure automation, containerization, and cloud services.",
        type: "work" as const,
        achievements: [
          "Participated in migration from Chef to Ansible",
          "Participated in migration of Docker Compose infrastructure to Kubernetes and ArgoCD",
          "Provisioned Azure Infrastructure using Terraform",
          "Automated CI/CD pipelines using GitHub Actions",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base grid layer - always visible */}
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            minHeight: "100vh",
          }}
        ></div>

        {/* Enhanced grid layer - follows mouse */}
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)`,
            minHeight: "100vh",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />
      {/* Skills Section */}
      <MySkills />
      {/* Experience Section */}
      <MyExperience experiences={experiences} />
      {/* Projects Section */}
      <MyProjects projects={projects} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
