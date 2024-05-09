import { render } from "preact";
import { Router, Route } from "preact-router";

import Nav from "./common/nav";
import Home from "./home";

import "./main.css";

const Routes = ({ onChange }: { onChange: () => void }) => (
  <Router onChange={onChange}>
    <Route path="/" component={Home} />
  </Router>
);

const App = () => {
  const handleRouteChange = () => {};

  return (
    <>
      <Nav />
      <main>
        <Routes onChange={handleRouteChange} />
      </main>
    </>
  );
};

render(<App />, document.getElementById("app")!);
