import { useEffect, useState } from "react";

function AnimatedTitles() {
  const roles = [
    { title: "Front-end Developer" },
   ,
  ];

  const [currentRoleIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRoleIndex].title;

      if (!isDeleting) {
        // Typing
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length + 1));
          setTypingSpeed(80);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentRoleIndex, roles]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-cyan-300">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
}

export default AnimatedTitles;
