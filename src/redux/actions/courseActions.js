// const { func } = require("prop-types");

export function createCourse(course) {
  return { type: "CREATE_COURSE", course: course };
}
