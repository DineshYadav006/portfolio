import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Hero />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Body>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
