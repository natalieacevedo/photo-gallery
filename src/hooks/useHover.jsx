import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    element.addEventListener("mouseenter", enter);
    element.addEventListener("mouseleave", leave);
    return () => {
      element.removeEventListener("mouseenter", enter);
      element.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, enter, leave, ref];
}

export default useHover;
