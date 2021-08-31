import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Article from "./pages/Article/Article";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/contact" exact render={() => <Contact />} />
        <Route path="/article" exact render={() => <Article />} />
      </Router>
    </>
  );
}

export default App;
