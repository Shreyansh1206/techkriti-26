
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactMarkdown from 'react-markdown';

gsap.registerPlugin(useGSAP);

function AccordionItem({
  item,
  isOpen,
  onClick,
}) {
  const containerRef = useRef(null);
  const answerRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    const answerElement = answerRef.current;
    if (!answerElement) return;

    gsap.to(answerElement, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      marginTop: isOpen ? "16px" : 0,
      duration: 0.4,
      ease: "power3.inOut",
    });

    gsap.to(iconRef.current, {
        rotate: isOpen ? 180 : 0,
        duration: 0.3,
        ease: "power2.out"
    });

  }, { dependencies: [isOpen], scope: containerRef });

  return (
    <div ref={containerRef} className="accordion-item">
      <button
        onClick={onClick}
        className="accordion-trigger"
      >
        <h3 className="accordion-title">
          {item.question}
        </h3>
        <div ref={iconRef}>
          <FontAwesomeIcon icon={faChevronDown} className="accordion-icon" />
        </div>
      </button>
      <div ref={answerRef} className="accordion-content">
        <div className="accordion-inner details-prose">
            <ReactMarkdown>{item.answer}</ReactMarkdown>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="btn btn-primary sm">
                Register
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export const Competitions = ({ competitions, openCompetition, setOpenCompetition }) => {
  const handleToggle = (name) => {
    setOpenCompetition(openCompetition === name ? null : name);
  };

  return (
    <div className="details-content-box">
      <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
        {competitions.map((comp) => (
          <AccordionItem
            key={comp.name}
            item={{ question: comp.name, answer: comp.desc }}
            isOpen={openCompetition === comp.name}
            onClick={() => handleToggle(comp.name)}
          />
        ))}
      </div>
    </div>
  );
};
