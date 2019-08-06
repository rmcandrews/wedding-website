import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import { Header } from "./components";
import { WeddingPage, LocationPage } from "./pages";

function App() {
  return (
    <Router>
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
