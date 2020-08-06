// const { func } = require("prop-types");

export function createCourse(course) {
  // debugger;
  return { type: "CREATE_COURSE", course: course };
}
