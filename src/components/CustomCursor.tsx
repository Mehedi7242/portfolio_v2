import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, input, textarea, select, label")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const animate = () => {
      const speed = 0.15; // Lower is smoother
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * speed;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);
    animate(); // start animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-50 w-3 h-3 rounded-full transition-transform duration-150 ease-out
        ${hovering ? "scale-150" : "scale-100"}
        bg-gray-800 dark:bg-gray-200`}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
