import React, { useRef, useState, useEffect } from 'react';

function ScrollableContainer({ children, style, className }) {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0); // Track the Y position for vertical drag
    const [scrollTop, setScrollTop] = useState(0); // Track the initial scrollTop position
    const [scrollProgress, setScrollProgress] = useState(0); // Track scroll progress

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY); // Store the starting Y position
        setScrollTop(containerRef.current.scrollTop); // Store the initial scroll position
        e.preventDefault(); // Prevent text selection or other default behavior
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const y = e.clientY - startY; // Calculate vertical movement
        containerRef.current.scrollTop = scrollTop - y; // Scroll vertically
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Stop dragging
    };

    const handleMouseLeave = () => {
        setIsDragging(false); // Stop dragging if the mouse leaves the container
    };

    // Function to center the container
    const centerContainer = () => {
        const container = containerRef.current;
        if (container) {
            const { scrollWidth, scrollHeight, clientWidth, clientHeight } = container;
            const scrollX = (scrollWidth - clientWidth) / 2;
            const scrollY = (scrollHeight - clientHeight) / 2;
            container.scrollLeft = scrollX;
            container.scrollTop = scrollY;
        }
    };

    // Update scroll progress on scroll
    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const totalHeight = container.scrollHeight - container.clientHeight;
            const progress = (container.scrollTop / totalHeight) * 100; // Calculate percentage scrolled
            setScrollProgress(progress);
        }
    };

    // useEffect(() => {
    //     // Center the container when the component mounts
    //     centerContainer();
    // }, []);

    return (
        <div
            ref={containerRef}
            style={{ ...style, position: 'relative' }} // Ensure position: relative for the parent container
            className={className}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll} // Track scrolling
        >
            {/* Scroll progress bar */}
            {/* <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: '5px',
                    width: '5px',
                    height: `${scrollProgress}%`, // Dynamic height based on scroll progress
                    backgroundColor: '#ffffff', // Color of the progress bar
                    borderRadius: '5px',
                    transition: 'height 0.1s ease-in-out', // Smooth animation
                }}
            ></div> */}

            {/* Content */}
            {children}
        </div>
    );
}

export default ScrollableContainer;
