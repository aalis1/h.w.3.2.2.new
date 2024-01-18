const students = require(`./student-data.json`);

let bestStudents = [];

students.forEach((students) => {
  students.forEach((student) => {
    if (student.score > 0) {
      bestStudents.push(student);
    }
    bestStudents.sort((a, b) => {
      return b.score - a.score;
    });
  });
});

console.log(bestStudents);

let result = bestStudents;

function findWinner(bestStudents) {
  let score = bestStudents.score;
  let date = bestStudents.date;

  if (bestStudents[0].score === Math.max(score)) {
    console.log(`congratulations ${bestStudents[0].name}, you are the winner`);
    return bestStudents[0].name;
  } else bestStudents[0].score === bestStudents[1].score;
  if (bestStudents[0].date < bestStudents[1].date) {
    console.log(`congratulations ${bestStudents[0].name}, you are the winner`);
  } else if (bestStudents[0].date > bestStudents[1].date) {
    console.log(`congratulations ${bestStudents[1].name}, you are the winner`);
  } else {
    console.log(
      `congratulations ${bestStudents[0].name}, ${bestStudents[1].name}, you are the winners`
    );
  }
}

findWinner(bestStudents);

module.export = bestStudents;
