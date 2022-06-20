import "./styles/globals.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <p className="text-white bg-black w-20">Hello world!</p>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}
export default App;
