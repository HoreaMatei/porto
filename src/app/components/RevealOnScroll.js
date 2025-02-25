import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.7 }); // Detects when 90% of the element is in view
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 }); // Reveal when scrolled into view
    } else if (scrollingUp) {
      controls.start({ opacity: 0, y: 50 }); // Hide when scrolling back up
    }
  }, [isInView, scrollingUp, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
