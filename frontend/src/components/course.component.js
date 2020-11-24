import React, { Component } from "react";
import CourseDataService from "../services/course.service";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getCourse = this.getCourse.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);

    this.state = {
      currentCourse: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCourse(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCourse: {
          ...prevState.currentCourse,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentCourse: {
        ...prevState.currentCourse,
        description: description
      }
    }));
  }

  getCourse(id) {
    CourseDataService.get(id)
      .then(response => {
        this.setState({
          currentCourse: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentCourse.id,
      title: this.state.currentCourse.title,
      description: this.state.currentCourse.description,
      published: status
    };

    CourseDataService.update(this.state.currentCourse.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentCourse: {
            ...prevState.currentCourse,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCourse() {
    CourseDataService.update(
      this.state.currentCourse.id,
      this.state.currentCourse
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The course was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCourse() {
    CourseDataService.delete(this.state.currentCourse.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/courses')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentCourse } = this.state;

    return (
      <div>
        {currentCourse ? (
          <div className="edit-form">
            <h4>Course</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCourse.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="5"
                  className="form-control"
                  id="description"
                  value={currentCourse.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCourse.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentCourse.published ? (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteCourse}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateCourse}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Course...</p>
          </div>
        )}
      </div>
    );
  }
}
