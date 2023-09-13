/* eslint-disable react/prop-types */
import { useState } from "react"
import './Accordion.css'

const AccordionSection = ({section, isActiveSection, setActiveIndex, sectionIndex}) =>{
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div>
            <div className="accordionTitle" onClick={toggleSection}>
                <div>{section.title}</div>
                <div>{isActiveSection ? "-" : "+"}</div>
            </div>
            {isActiveSection && <div className="accordionContent">{section.content}</div>}
        </div>
    );
};


const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className="accordionContainer">
            <div className="accordionItem">
                {sections.map((section, index) =>(
                    <AccordionSection 
                        section={section} 
                        key={index} 
                        isActiveSection={index === activeIndex} 
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}
                    />
                ))}
            </div>            
        </div>
    );
};
export default Accordion;
