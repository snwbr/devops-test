import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCourse from "./components/course-add.component";
import Course from "./components/course.component";
import CoursesList from "./components/courses-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container justify-content-start">
            <Link to={"/courses"} className="navbar-brand align-items-center">
              <img src={"/logo32.png"} className="mr-2" alt="Logo Clever U" />
              <strong>CleverU</strong>
            </Link>
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/courses"} className="nav-link">
                    <strong>Courses</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                  <strong>Add</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/courses"]} component={CoursesList} />
            <Route exact path="/add" component={AddCourse} />
            <Route path="/courses/:id" component={Course} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
