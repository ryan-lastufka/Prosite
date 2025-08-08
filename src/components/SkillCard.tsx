import { FunctionComponent } from 'preact';
import { SrcsetImage } from './SrcsetImage';

interface SkillCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
}

export const SkillCard: FunctionComponent<SkillCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="skill-card">
      <SrcsetImage
        baseUrl={imageUrl}
        alt={imageAlt}
        className="skill-image"
      />
      <div className="skill-content">
        <div className="skill-main">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="tech-list">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};