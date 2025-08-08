
import { FunctionComponent, useEffect, useState, useRef } from 'preact/compat';

interface NavigationStripProps {
    sections: string[];
}

const NAV_LABEL_TOP_OFFSET = 10;
const NAV_LABEL_BOTTOM_OFFSET = 10;
const VERTICAL_BUFFER = 20;
const HORIZONTAL_BUFFER = 100;

export const NavigationStrip: FunctionComponent<NavigationStripProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [clipHeightTop, setClipHeightTop] = useState(0);
    const [clipHeightBottom, setClipHeightBottom] = useState(0);
    const isProgrammaticScroll = useRef(false);
    const scrollTimeout = useRef<number | null>(null); 
    useEffect(() => {
        const updateClipHeights = () => {
            const landingSection = document.getElementById('landing');
            const footer = document.querySelector('.footer') as HTMLElement;
            if (landingSection && footer) {
                const landingRect = landingSection.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();

                
                setClipHeightTop(landingRect.bottom);
                setClipHeightBottom(footerRect.top);
            }
        };

        updateClipHeights();
        window.addEventListener('scroll', updateClipHeights);
        window.addEventListener('resize', updateClipHeights);

        return () => {
            window.removeEventListener('scroll', updateClipHeights);
            window.removeEventListener('resize', updateClipHeights);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isProgrammaticScroll.current) {
                return;
            }

            
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = window.setTimeout(() => {
                const viewportHeight = window.innerHeight;
                let newActiveSection = activeSection;
                const scrollThreshold = viewportHeight / 2; 

                
                if (activeSection !== 0) {
                    const landingElement = document.getElementById(sections[0]);
                    if (landingElement) {
                        const landingRect = landingElement.getBoundingClientRect();
                        const landingTop = landingRect.top;
                        if (landingTop >= 0 && landingTop <= scrollThreshold) {
                            newActiveSection = 0;
                            setActiveSection(newActiveSection); 
                            return;
                        }
                    }
                }

                
                for (let i = 0; i < sections.length; i++) {
                    const sectionId = sections[i];
                    const element = document.getElementById(sectionId);

                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const sectionTop = rect.top; 
                        const sectionBottom = rect.bottom; 

                        
                        const isSectionActive = (sectionTop <= scrollThreshold && sectionTop >= 0) || (sectionTop <= 0 && sectionBottom >= 0);

                        if (isSectionActive) {
                            newActiveSection = i;
                            
                        }
                    }
                }

                if (newActiveSection !== activeSection) {
                    setActiveSection(newActiveSection);
                }
            }, 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [sections, activeSection]);

    const handleNavClick = (sectionId: string) => {
        isProgrammaticScroll.current = true;
        const element = document.getElementById(sectionId);
        if (element) {
            const sectionIndex = sections.indexOf(sectionId);
            if (sectionIndex !== -1) {
                setActiveSection(sectionIndex);
            }
            element.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 750)
    };

    
    const getLabelPosition = (index: number) => {
        const totalSections = sections.length;
        const topOffset = NAV_LABEL_TOP_OFFSET;
        const bottomOffset = NAV_LABEL_BOTTOM_OFFSET;
        const availableSpace = 100 - topOffset - bottomOffset;
        return `${topOffset + (index * (availableSpace / (totalSections - 1)))}%`;
    };

    const getNavContent = () => (
        <>
            <div className="nav-line" />
            <div
                className="nav-indicator"
                style={{
                    top: getLabelPosition(activeSection),
                    transform: 'translateY(-50%)'
                }}
            />
            <div className="nav-labels">
                {sections.map((section, index) => (
                    <a
                        key={section}
                        onClick={() => handleNavClick(section)}
                        className={`nav-label ${index === activeSection ? 'active' : ''}`}
                        style={{
                            top: getLabelPosition(index),
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </div>
        </>
    );

    return (
        <>
            <nav
                className="navigation-strip light"
                style={{
                    clipPath: `inset(-${VERTICAL_BUFFER}px -${HORIZONTAL_BUFFER}px ${clipHeightTop}px -${HORIZONTAL_BUFFER}px, ${clipHeightBottom}px -${HORIZONTAL_BUFFER}px -${VERTICAL_BUFFER}px -${HORIZONTAL_BUFFER}px)`,
                }}
            >
                {getNavContent()}
            </nav>
            <nav
                className="navigation-strip dark"
                style={{
                    clipPath: `inset(${clipHeightTop}px -${HORIZONTAL_BUFFER}px ${Math.max(0, window.innerHeight - clipHeightBottom)}px -${HORIZONTAL_BUFFER}px)`
                }}
            >
                {getNavContent()}
            </nav>
        </>
    );
};

export default NavigationStrip;

