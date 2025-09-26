import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollButton = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 200); // if user scrolls down 200px, switch button
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    if (atTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollTo}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition"
      aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
    >
      {atTop ? <ArrowDown className="h-5 w-5" /> : <ArrowUp className="h-5 w-5" />}
    </button>
  );
};

export default ScrollButton;
