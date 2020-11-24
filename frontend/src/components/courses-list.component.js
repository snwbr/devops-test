import React, { Component } from "react";
import CourseDataService from "../services/course.service";
import { Link } from "react-router-dom";

export default class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveCourses = this.retrieveCourses.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCourse = this.setActiveCourse.bind(this);
    this.removeAllCourses = this.removeAllCourses.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      courses: [],
      currentCourse: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveCourses();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveCourses() {
    CourseDataService.getAll()
      .then(response => {
        this.setState({
          courses: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCourses();
    this.setState({
      currentCourse: null,
      currentIndex: -1
    });
  }

  setActiveCourse(course, index) {
    this.setState({
      currentCourse: course,
      currentIndex: index
    });
  }

  removeAllCourses() {
    CourseDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    CourseDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          courses: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, courses, currentCourse, currentIndex } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.searchTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h4>Courses List</h4>

            <ul className="list-group">
              {courses &&
                courses.map((course, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveCourse(course, index)}
                    key={index}
                  >
                    {course.title}
                  </li>
                ))}
            </ul>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllCourses}
            >
              Remove All
            </button>
          </div>
          <div className="col-md-8">
            {currentCourse ? (
              <div>
                <h4>Course</h4>
                <div>
                  <label>
                    <strong>Title:</strong>
                  </label>{" "}
                  {currentCourse.title}
                </div>
                <div>
                  <label>
                    <strong>Description:</strong>
                  </label>{" "}
                  {currentCourse.description}
                </div>
                <div>
                  <label>
                    <strong>Status:</strong>
                  </label>{" "}
                  {currentCourse.published ? "Published" : "Pending"}
                </div>

                <Link
                  to={"/courses/" + currentCourse.id}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Course...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
