import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const links = (props) => {
  let data = Array.from(props);
  console.log(Object.values(props));
  
  return (
    <div><h4>Links</h4>
      <Router>
        <div>
          <nav>
            <ul>
              {Object.keys(props).map((props, i) => (
                <li key={i}>
                  <Link to={props}>{props}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          {Object.keys(props).map((props, i) => (
            <Routes  key={i}>
              <Route path={props}></Route>
            </Routes>
          ))}
        </div>
      </Router>
    </div>
  );
};
export default links;
