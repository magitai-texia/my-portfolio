import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
        <Projects />
        
        {/* Contactセクションを追加 */}
        <section id="contact">
          <div className="container">
            <h2>Contact</h2>
            <p>Email: takahamagitai@gmail.com</p>
            <p>GitHub: <a href="https://github.com/magitai-texia" target="_blank" rel="noopener noreferrer">magitai-texia</a></p>
          </div>
        </section>
        
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
