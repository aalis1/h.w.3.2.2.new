const students = require(`./student-data.json`);

let bestStudents = [];

students.forEach((students) => {
  students.forEach((student) => {
    if (student.score > 0) {
      bestStudents.push(student);
    }
    bestStudents.sort((a, b) => {
      return a.score - b.score;
    });
  });
});

console.log(bestStudents);

module.export = bestStudents;
