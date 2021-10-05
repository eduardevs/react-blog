import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          {/* only one route shows at any one time */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            {/* this path cant have an id hardcoded so we can put it as a second parameter */}
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route>
                <NotFound path="*" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
