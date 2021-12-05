import Home from"./Component/HomeComponent/Home";
import Nav from "./Component/NavComponent/Nav";

// importing route..................

import { Route } from "react-router";

// importing the pages..........................

import MoviePage from "./Component/MoviePage/MoviePage";
import WebShow from "../src/Component/Web/WebShow"
import { navPageData } from "./apilinks";

function App() {
  
  return (
  <>
    <Nav/>

    <Route exact path = "/">
      <Home/>
    </Route>

    <Route path = "/web">
    <WebShow navPageData = {navPageData[0]} />
    </Route>

    <Route path = "/movie">
      <WebShow navPageData = {navPageData[1]} />
    </Route>

    <Route path = "/popular">
      <WebShow navPageData = {navPageData[2]} />
    </Route>

    <Route path = "/movie-detail/:id">
      <MoviePage/>
    </Route>
    
  </>
  );
}

export default App;
