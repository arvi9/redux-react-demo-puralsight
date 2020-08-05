import React from "react";

class CoursesPage extends React.Component {
  //State Decleration
  // constructor(props) {
  //   super(props);

  //   this.state = { course: { title: "" } };

  //Binding to the Constructer
  // this.handleChange = this.handeleChange.bind(this);
  // }

  state = { course: { title: "" } };
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    //Prevent form from posting back
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Courses</h3>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
