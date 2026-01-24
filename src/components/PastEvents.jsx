import React from 'react';
import './PastEvents.css';

import demoImage from '../assets/demo.jpeg';

// Generate a list of items to populate the cylinder
const RAW_IMAGES = [
  demoImage,
  demoImage,
  demoImage,
  demoImage,
  demoImage,
  demoImage,
];

// Double the array to ensure cylinder density
const CAROUSEL_ITEMS = [...RAW_IMAGES, ...RAW_IMAGES];

const PastEvents = () => {
    const totalItems = CAROUSEL_ITEMS.length;
    const anglePerItem = 360 / totalItems;

    return (
        <div className="past-events-section" id="past-events">
            <h2 className="section-title">Past Events: Relive the Journey</h2>

            <div className="scene-container">
                <div className="split-view left-split">
                    <div className="carousel-scene">
                        <div className="cylinder grayscale-filter">
                            {CAROUSEL_ITEMS.map((imgSrc, index) => {
                                const rotationAngle = index * anglePerItem;
                                return (
                                    <div 
                                        className="carousel-item" 
                                        key={index}
                                        style={{ '--angle': `${rotationAngle}deg` }}
                                    >
                                        <img src={imgSrc} alt={`Event ${index}`} className="event-img" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="split-view right-split">
                    <div className="carousel-scene">
                        <div className="cylinder">
                            {CAROUSEL_ITEMS.map((imgSrc, index) => {
                                const rotationAngle = index * anglePerItem;
                                return (
                                    <div 
                                        className="carousel-item" 
                                        key={index}
                                        style={{ '--angle': `${rotationAngle}deg` }}
                                    >
                                        <img src={imgSrc} alt={`Event ${index}`} className="event-img" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Overlays */}
            {/* effect-overlay removed */}
            <div className="center-line"></div>
        </div>
    );
};

export default PastEvents;