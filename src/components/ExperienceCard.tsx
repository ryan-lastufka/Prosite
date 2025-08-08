import { FunctionComponent } from 'preact';
import { SrcsetImage } from './SrcsetImage'; 

interface ExperienceCardProps {
  title: string;
  company: string;
  period?: string;
  description: string;
  logoImageUrl: string;
  logoImageAlt?: string;
  previewImageUrl?: string;
  previewImageAlt?: string;
}

export const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  logoImageUrl,
  logoImageAlt,
  previewImageUrl,
  previewImageAlt,
}) => {
  return (
    <div className="experience-item">
      <div className="left-images">
        <SrcsetImage 
          baseUrl={logoImageUrl}
          alt={logoImageAlt}
          className="logo-image"
        />
        {previewImageUrl && (
          <SrcsetImage 
            baseUrl={previewImageUrl}
            alt={previewImageAlt}
            className="preview-image"
          />
        )}
      </div>
      {previewImageUrl && (
        <div className="preview-image-right">
          <SrcsetImage 
            baseUrl={previewImageUrl}
            alt={previewImageAlt}
            className="preview-image"
          />
        </div>
      )}
      <div className="experience-details">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="period">{period}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
