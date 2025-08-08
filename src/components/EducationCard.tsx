import { FunctionComponent } from 'preact';
import { SrcsetImage } from './SrcsetImage';

interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  description: string;
  logoImageUrl: string;
  logoImageAlt?: string;
}

export const EducationCard: FunctionComponent<EducationCardProps> = ({
  school,
  degree,
  period,
  description,
  logoImageUrl,
  logoImageAlt,
}) => {
  return (
    <div className="education-item">
        <SrcsetImage 
          baseUrl={logoImageUrl}
          alt={logoImageAlt}
          className="logo-image"
        />
      <div className="education-details">
        <h3>{school}</h3>
        <p className="degree">{degree}</p>
        <p className="period">{period}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}; 
