import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Signin from "./Components/Signin";
import Error from "./Components/Error";
import FeaturedProjects from "./Components/FeaturedProjects";
import NewProjects from "./Components/NewProjects";
import NewDescription from "./Components/NewDescription";
import FeaturedDescription from "./Components/FeaturedDescription";
//import NewProjects from "./Components/NewProjects";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="featured" element={<FeaturedProjects />} />
            <Route path="new" element={<NewProjects />} />
          </Route>
          <Route
            path="/signin"
            element={<Signin user={user} setUser={setUser} />}
          />
          <Route
            path="/projects/featured/:id"
            element={<FeaturedDescription />}
          />
          <Route path="/projects/new/:id" element={<NewDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
