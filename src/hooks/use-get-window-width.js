import { useState, useEffect } from "react";

const useGetWindowWidth = () => {
  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
      width,
    };
  };

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(getWindowWidth());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  };

  return { useWindowWidth };
};

export default useGetWindowWidth;
