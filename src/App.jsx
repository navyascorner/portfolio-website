import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    setIsTouchDevice(touch);

    if (touch) return;

    const moveCursor = (event) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    };

    const addHover = () => {
      cursorRef.current?.classList.add("cursor-hover");
    };

    const removeHover = () => {
      cursorRef.current?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", moveCursor);

    const clickableElements = document.querySelectorAll("a, button");
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", addHover);
      element.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", addHover);
        element.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div ref={cursorRef} className="pixel-cursor">
      <div className="wand-stick" />
    </div>
  );
}

function HomeRoute() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "projects") {
    return <Navigate to="/projects" replace />;
  }

  return <Home />;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <PixelCursor />

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}