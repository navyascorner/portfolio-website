import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Notebook from "./pages/Notebook";
import CurrentlyReading from "./pages/CurrentlyReading";
import Projects from "./pages/Projects";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function PixelCursor() {
  const cursorRef = useRef(null);

  // Evaluated once, before first paint — no extra render on mount.
  const [isTouchDevice] = useState(
    () =>
      window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window
  );

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (event) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    };

    // Delegated hover tracking: one pair of listeners on the document
    // catches every <a> and <button>, including ones rendered later.
    const handleOver = (event) => {
      if (event.target.closest?.("a, button")) {
        cursorRef.current?.classList.add("cursor-hover");
      }
    };

    const handleOut = (event) => {
      const from = event.target.closest?.("a, button");
      if (!from) return;

      // Ignore moves between children of the same link/button.
      const to = event.relatedTarget?.closest?.("a, button");
      if (to === from) return;

      cursorRef.current?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div ref={cursorRef} className="pixel-cursor">
      <div className="wand-stick" />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <PixelCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/currently-reading" element={<CurrentlyReading />} />
        {/* Unknown URLs fall back to Home instead of a blank page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}