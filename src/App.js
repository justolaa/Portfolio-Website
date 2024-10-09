
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./app.css";
import ReactGA from 'react-ga4';

const Analytics = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send('pageview'); // Send pageview data to GA
  }, [location]);

  return null;
};

function App() {
     useEffect(() => {
    ReactGA.initialize('G-X91L5VE9JG'); // Replace with your GA4 Measurement ID
  }, []);
	return (
		<div className="App">
			<Analytics />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
