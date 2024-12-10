import React from 'react';
import ProjectCard from './sections/ProjectCard';
import TestimonialCard from './sections/TestimonialCard';
import FadeIn from './animations/FadeIn';

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Driven Threat Detection",
      description: "Implemented an advanced threat detection system using machine learning algorithms to identify and prevent cyber attacks in real-time.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      category: "AI Security",
      status: "completed" as const,
      technologies: ["Python", "TensorFlow", "Kubernetes", "AWS"],
      link: "#"
    },
    {
      title: "Cloud Infrastructure Protection",
      description: "Developed a comprehensive cloud security solution for a leading financial institution, securing their entire cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      category: "Cloud Security",
      status: "completed" as const,
      technologies: ["AWS", "Docker", "Terraform", "Python"],
      link: "#"
    },
    {
      title: "Network Security Enhancement",
      description: "Currently implementing next-generation firewall and intrusion detection systems for a healthcare provider network.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80",
      category: "Network Security",
      status: "in-progress" as const,
      technologies: ["Cisco", "Python", "Linux", "Elasticsearch"],
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Global",
      testimonial: "NECXOR's AI-driven security solutions have transformed our cybersecurity infrastructure. Their innovative approach and dedicated team have made us feel secure and confident.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Security Director",
      company: "FinanceHub",
      testimonial: "The cloud security implementation by NECXOR exceeded our expectations. Their expertise in financial security compliance is unmatched.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Emily Watson",
      role: "IT Manager",
      company: "HealthCare Plus",
      testimonial: "Working with NECXOR has been a game-changer for our healthcare network security. Their proactive approach to threat detection is impressive.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Our Portfolio
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses secure their digital assets
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Client Testimonials
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.4 + index * 0.1}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;