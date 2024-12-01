import React, { useRef, useState } from 'react';

function ScrollableContainer({ children, style, className }) {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0); // Track the Y position for vertical drag
    const [scrollTop, setScrollTop] = useState(0); // Track the initial scrollTop position
  
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
  
    return (
      <div 
        ref={containerRef} 
        style={style} 
        className={className}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        >
        {children}
      </div>
    );
}

export default ScrollableContainer;
