import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import Home from "./components/Home";
import Features from "./components/Features";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const lightTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme = {
  background: "#000",
  color: "#fff",
};

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <AppWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Features />
                  <Services />
                </>
              }
            />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
