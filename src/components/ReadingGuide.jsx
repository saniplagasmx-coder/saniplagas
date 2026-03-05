import { useEffect, useState } from 'react';
import { useAccessibility } from '../accessibility/AccessibilityContext';

const ReadingGuide = () => {
  const { readingGuide } = useAccessibility();
  const [y, setY] = useState(-100);

  useEffect(() => {
    if (!readingGuide) return;

    const handleMove = (e) => setY(e.clientY);
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, [readingGuide]);

  if (!readingGuide) return null;

  return (
    <div
      className="a11y-reading-guide"
      style={{ top: `${y}px` }}
      aria-hidden="true"
    />
  );
};

export default ReadingGuide;
