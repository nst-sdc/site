import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages/Projects.css";
import resobin from "../../assets/images/ResoBin.png";
import messi from "../../assets/images/Mess I.png";
import instiapp from "../../assets/images/InstiApp.png";
import newbee from "../../assets/images/NewBee.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useElementOnScreen from "../../hooks/useElementOnScreen";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectsContainerRef = useRef(null);
  const scrollingRef = useRef({ isScrolling: false });
  const projectsCount = 4; // Total number of projects
  
  // Use our custom hook to detect when projects section is visible
  const [sectionRef] = useElementOnScreen({
    threshold: 0.4,
    reappear: true
  });
  
  // Make sure body scroll is never locked
  useEffect(() => {
    // Always ensure scrolling is enabled
    document.body.style.overflow = '';
    
    // Clean up on unmount - double check we don't leave any scroll locks
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  // Handle wheel events for horizontal project navigation
  useEffect(() => {
    // Store a reference to the timeout
    let timeoutId = null;
    
    const handleWheel = (e) => {
      // Get container bounds to check if we're properly in the projects section
      const containerRect = projectsContainerRef.current?.getBoundingClientRect();
      if (!containerRect) return;
      
      // Only intercept wheel events when we're properly in the projects area
      // We consider the section active when it takes up at least 60% of the viewport height
      const isFullyInView = containerRect.top <= window.innerHeight * 0.2 && 
                            containerRect.bottom >= window.innerHeight * 0.8;
      
      // If we're not properly in the projects section, allow normal scrolling
      if (!isFullyInView) return;
      
      // Don't handle if we're animating
      if (isAnimating || scrollingRef.current.isScrolling) return;
      
      // Get scroll direction: positive = down/right, negative = up/left
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      
      // Calculate next project index
      const nextIndex = activeIndex + scrollDirection;
      
      // If we've reached the end, allow normal scrolling to continue
      if (nextIndex < 0 || nextIndex >= projectsCount) {
        return; // Don't prevent default - let normal scrolling happen
      }
      
      // We're moving between projects, handle the navigation
      e.preventDefault(); // Prevent page scroll only while navigating between projects
      
      // Update animation direction
      setDirection(scrollDirection);
      
      // Change to the next project
      setActiveIndex(nextIndex);
      
      // Mark that we're animating
      setIsAnimating(true);
      
      // Prevent rapid scrolling
      scrollingRef.current.isScrolling = true;
      
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set timeout to re-enable scrolling
      timeoutId = setTimeout(() => {
        scrollingRef.current.isScrolling = false;
      }, 500);
    };
    
    // Add wheel event listener to the container itself, not window
    const container = projectsContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel, { passive: false });
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeIndex, isAnimating, projectsCount]);

  const projectsData = [
    { 
      id: 0, 
      title: "ResoBin", 
      imgSrc: resobin, 
      link: "/resobin",
      description: "A comprehensive resource sharing platform designed to streamline information exchange within the campus community. Access study materials, notes, and resources with ease."
    },
    { 
      id: 1, 
      title: "InstiApp", 
      imgSrc: instiapp, 
      link: "/instiapp",
      description: "Your all-in-one campus companion that provides real-time updates, event notifications, and essential services to enhance your institute experience and keep you connected."
    },
    { 
      id: 2, 
      title: "Mess-I", 
      imgSrc: messi, 
      link: "/messi",
      description: "An intelligent mess management system that optimizes food service operations, reduces waste, and improves the dining experience through digital menu planning and feedback."
    },
    { 
      id: 3, 
      title: "NewBee", 
      imgSrc: newbee, 
      link: "/newbee",
      description: "A seamless onboarding platform that guides new students through their transition to campus life with personalized orientations, resources, and community connections."
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      // When scrolling down (direction > 0), next project comes from right (100%)
      // When scrolling up (direction < 0), next project comes from left (-100%)
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      // When scrolling down (direction > 0), current project exits to left (-100%)
      // When scrolling up (direction < 0), current project exits to right (100%)
      zIndex: 0,
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
    })
  };

  // We're removing the wave animation since it's causing issues

  return (
    <div 
      ref={(el) => {
        // Set both refs to the same element
        projectsContainerRef.current = el;
        if (sectionRef) {
          sectionRef.current = el;
        }
      }} 
      className="container project-container"
    >
      {/* Removed wave transition effect as it was causing visual glitches */}
      
      {/* Removed particle effects for better performance */}
      
      <motion.div 
        className="row project-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="project">
          <motion.p 
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Projects
          </motion.p>
        </div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="scroll-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </div>
          <span>Use buttons to navigate</span>
        </motion.div>
      </motion.div>
      <div className="row project-body">
        {/* Left Navigation Button */}
        <button 
          className={`nav-button left ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={() => {
            if (activeIndex > 0 && !isAnimating) {
              setDirection(-1);
              setActiveIndex(activeIndex - 1);
              setIsAnimating(true);
            }
          }}
          disabled={activeIndex === 0 || isAnimating}
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
          </svg>
        </button>
        
        <div className="project-container-stable">
          <AnimatePresence 
            mode="wait"
            initial={false}
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
            className="project-showcase"
          >
            <motion.div 
              className="project-card"
              initial={{
                background: "rgba(242, 242, 242, 0.05)",
                backgroundImage: "linear-gradient(120deg, rgba(242, 242, 242, 0.05) 0%, rgba(242, 242, 242, 0.02) 100%)",
                scale: 1,
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)"
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(242, 242, 242, 0.2)",
                background: "rgba(242, 242, 242, 0.08)",
                backgroundImage: "linear-gradient(120deg, rgba(242, 242, 242, 0.08) 0%, rgba(242, 242, 242, 0.04) 100%)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                boxShadow: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="project-content">
                <motion.div 
                  className="project-title-box"
                  initial={{ 
                    opacity: 0, 
                    x: direction > 0 ? 40 : -40
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                    <motion.div 
                    className="project-tags"
                    initial={{ 
                      opacity: 0, 
                      x: direction > 0 ? 20 : -20 
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0
                    }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                  >
                    {activeIndex === 0 && <span className="project-tag tech">React</span>}
                    {activeIndex === 1 && <span className="project-tag tech">Flutter</span>}
                    {activeIndex === 2 && <span className="project-tag tech">Node.js</span>}
                    {activeIndex === 3 && <span className="project-tag tech">React Native</span>}
                  </motion.div>                  <h2 className="project-title">{projectsData[activeIndex].title}</h2>
                  <p className="project-description">{projectsData[activeIndex].description}</p>
                  
                  <motion.div 
                    className="tech-stack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4 }}
                  >
                    {activeIndex === 0 && "React • Firebase • Material UI"}
                    {activeIndex === 1 && "Flutter • Dart • Firebase"}
                    {activeIndex === 2 && "Node.js • Express • MongoDB"}
                    {activeIndex === 3 && "React Native • Redux • API Integration"}
                  </motion.div>
                </motion.div>
                
                <Link to={projectsData[activeIndex].link} className="project-link">
                  <motion.div 
                    className="project-image-box"
                    initial={{ 
                      opacity: 0, 
                      scale: 0.9,
                      x: direction > 0 ? 50 : -50
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 0
                    }}
                    transition={{ 
                      delay: 0.2,
                      duration: 0.4
                    }}
                  >
                    <img
                      className="project-img"
                      src={projectsData[activeIndex].imgSrc}
                      alt={`${projectsData[activeIndex].title} logo`}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="project-explore"
                    initial={{ 
                      opacity: 0, 
                      x: direction > 0 ? 20 : -20 
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0 
                    }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Right Navigation Button */}
        <button 
          className={`nav-button right ${activeIndex === projectsCount - 1 ? 'disabled' : ''}`}
          onClick={() => {
            if (activeIndex < projectsCount - 1 && !isAnimating) {
              setDirection(1);
              setActiveIndex(activeIndex + 1);
              setIsAnimating(true);
            }
          }}
          disabled={activeIndex === projectsCount - 1 || isAnimating}
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </div>
      
      {/* Progress indicator */}
      <div className="project-progress-indicator">
        {Array.from({ length: projectsCount }).map((_, index) => (
          <div 
            key={index} 
            className={`progress-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;