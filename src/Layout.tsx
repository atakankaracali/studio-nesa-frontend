import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      document.documentElement.classList.toggle("dark", nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
