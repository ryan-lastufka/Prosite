import { FunctionComponent } from 'preact';
import { JSX } from 'preact/jsx-runtime';

interface SectionProps {
  id: string;
  children: JSX.Element | JSX.Element[];
  isFirst?: boolean;
  isLast?: boolean;
  onNextSection?: (e: MouseEvent) => void;
  onPrevSection?: (e: MouseEvent) => void;
}

export const Section: FunctionComponent<SectionProps> = ({
  id,
  children,
  isFirst = false,
  isLast = false,
  onNextSection,
  onPrevSection,
}) => {
  return (
    <section id={id} className={`section ${id}`}>
      {!isFirst && (
        <div className="section-nav-area top" onClick={onPrevSection}>
          <div className="section-nav">▲</div>
        </div>
      )}
      <div className="section-content">{children}</div>
      {!isLast && (
        <div className="section-nav-area" onClick={onNextSection}>
          <div className="section-nav">▼</div>
        </div>
      )}
    </section>
  );
}; 