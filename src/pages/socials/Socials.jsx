import React, { useEffect, useRef, useState } from "react";
import './socials.css'

const Socials = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                const height = containerRef.current.offsetHeight;

                const offset = window.innerWidth < 767 ? 20 : 80;
                let constrainedWidth = width - offset;
                
                // Only enforce minimum width on screens wider than 1180px
                if (window.innerWidth > 1180) {
                    const minWidth = 800; // Adjust this to keep single column layout
                    constrainedWidth = Math.max(constrainedWidth, minWidth);
                }
                
                setDimensions({ 
                    width: constrainedWidth, 
                    height 
                });
            }
        };

        // Set initial dimensions
        updateDimensions();

        // Add resize listener
        window.addEventListener('resize', updateDimensions);

        // Cleanup
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <section className="socials-body">
            <div className="hex-background-socials" />
            {/* <h1 className="socials-title">Socials</h1> */}
            <div className="linkedin-feed"  ref={containerRef}>
                <div className="linkedin-banner" />
                <iframe 
                    src="https://www.juicer.io/api/feeds/citifi/iframe" 
                    frameBorder="0" 
                    width={dimensions.width} 
                    height={dimensions.height} 
                    style={{display: 'block', margin: '0 auto'}}
                    title="Juicer Social Feed"
                />

                {/* <iframe 
                    src="https://www.juicer.io/api/feeds/brendanmoffett/iframe" 
                    frameBorder="0" 
                    width={dimensions.width - 80} 
                    height={dimensions.height} 
                    style={{display: 'block', margin: '0 auto'}}
                    title="Juicer Social Feed"
                ></iframe> */}
            </div>
        </section>
    )
}

export default Socials;