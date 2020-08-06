import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = { course: { title: "" } };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    //Prevent form from posting back
    event.preventDefault();
    //debugger;
    //Dispatching an Action
    this.props.actions.createCourse(this.state.course);
    //alert(this.state.course.title);
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
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
        {console.log(this.props.courses)}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //debugger;
  return {
    courses: state.courses,
  };
}

//Dispatch is Handeled by mapDispatachToProps
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// const connectedStateAndProps = connect(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// export default connectedStateAndProps(CoursesPage);
