import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import Theme from "./Theme";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Tour from "./pages/tour";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <ThemeProvider theme={Theme}>
          <Navbar />
          <Switch>
            <Route path="/YHCWebsite/#" exact component={Home} />
            <Route path="/YHCWebsite/#/about" exact component={About} />
            <Route path="/YHCWebsite/#/tour" exact component={Tour} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
