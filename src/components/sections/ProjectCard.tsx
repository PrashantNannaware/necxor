import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../common/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'completed' | 'in-progress';
  technologies: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  status,
  technologies,
  link
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20"
  >
    <div className="aspect-w-16 aspect-h-9">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="flex items-center space-x-3 mb-2">
        <span className="text-cyan-400 text-sm font-medium">{category}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
          {status === 'completed' ? 'Completed' : 'In Progress'}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <Button
          variant="secondary"
          className="opacity-0 group-hover:opacity-100 transition-opacity w-fit"
        >
          View Project <ExternalLink className="inline-block ml-2" size={16} />
        </Button>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;