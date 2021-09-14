import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Article from "./pages/Article/Article";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/article" exact render={() => <Article />} />
        <Route path="/profile" exact render={() => <Profile />} />
      </Router>
    </>
  );
}

export default App;
