import React, { useState } from "react";
import { FirstVisit } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import { Header } from "./components";
import { WeddingPage, LocationPage } from "./pages";

let loadScreenOpacityTracker = 1;
let interval;

function App() {
  const [hasVisited, setHasVisited] = useState(
    localStorage.getItem("hasVisited")
  );
  const [loadScreenOpacity, setLoadScreenOpacity] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  if (!hasVisited) {
    setTimeout(function() {
      localStorage.setItem("hasVisited", true);
      setHasVisited(true);
    }, 3000);
  }

  if (firstLoad) {
    let loadFadeDelay = 5000;
    let loadFadeRate = 0.1;
    if (!hasVisited) {
      loadFadeDelay = 10000;
      loadFadeRate = 0.05;
    }

    setTimeout(function() {
      interval = setInterval(function() {
        loadScreenOpacityTracker -= loadFadeRate;
        setLoadScreenOpacity(loadScreenOpacityTracker);
      }, 50);
    }, loadFadeDelay);
    setFirstLoad(false);
  }

  if (loadScreenOpacity <= 0) clearInterval(interval);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {loadScreenOpacity > 0 && <FirstVisit opacity={loadScreenOpacity} />}
      <ThemeProvider theme={theme}>
        <Header />
        <Route exact path="/" component={WeddingPage} />
        <Route path="/location" component={LocationPage} />
        <Route path="/registry" component={RSVPPage} />
      </ThemeProvider>
    </Router>
  );
}

function RSVPPage() {
  return (
    <div>
      <h2>RSVP Page</h2>
    </div>
  );
}

export default App;
