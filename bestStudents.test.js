const bestStudents = require(`./ bestStudents`);

// describe("sort the student", () => {
//   test("find students with positive scores", () => {
//     expect(
//       bestStudents.name && bestStudents.score !== 0 && bestStudents.date
//     ).toEqual(
//       bestStudents[
//         ({ name: "Ivan", score: 35, date: "2022-10-11" },
//         { name: "Stepan", score: 35, date: "2022-10-12" },
//         { name: "Natalia", score: 25, date: "2022-10-10" },
//         { name: "Marina", score: 25, date: "2022-10-01" },
//         { name: "Dmitry", score: 25, date: "2022-10-12" },
//         { name: "Zanna", score: 15, date: "2022-10-11" },
//         { name: "Oleg", score: 9, date: "2022-10-01" },
//         { name: "Maria", score: 5, date: "2022-10-10" },
//         { name: "Vladimyr", score: 1, date: "2022-10-11" })
//       ]
//     );
//   });

//   test("find the student who passed the test first", () => {
//     expect(
//       bestStudents.name &&
//         bestStudents.score !== 0 &&
//         bestStudents.date === Math.floor
//     ).toEqual(
//       bestStudents[
//         ({ name: "Oleg", score: 9, date: "2022-10-01" },
//         { name: "Marina", score: 25, date: "2022-10-01" })
//       ]
//     );
//   });

//   test("find students with max scores", () => {
//     expect(
//       bestStudents.name && bestStudents.score === Math.max && bestStudents.date
//     ).toEqual(
//       bestStudents[
//         ({ name: "Ivan", score: 35, date: "2022-10-11" },
//         { name: "Stepan", score: 35, date: "2022-10-12" })
//       ]
//     );
//   });

//   test("find students with min positiv scores", () => {
//     expect(
//       bestStudents.name &&
//         bestStudents.score === Math.floor &&
//         bestStudents.date
//     ).toEqual(bestStudents[{ name: "Vladimyr", score: 1, date: "2022-10-11" }]);
//   });

//   test("find students with 0 scores", () => {
//     expect(
//       bestStudents.name && bestStudents.score === 0 && bestStudents.date
//     ).toEqual(
//       bestStudents[
//         [
//           { name: "Irina", score: 0, date: "2022-10-11" },
//           { name: "Vasily", score: 0, date: "2022-10-10" },
//           { name: "David", score: 0, date: "2022-10-11" },
//           { name: "Kristina", score: 0, date: "2022-10-12" },
//           { name: "Varvara", score: 0, date: "2022-10-01" },
//           { name: "Tanya", score: 0, date: "2022-10-11" },
//           { name: "Olga", score: 0, date: "" },
//           { name: "Denis", score: 0, date: "2022-10-02" },
//           { name: "Margo", score: 0, date: "2022-10-11" },
//         ]
//       ]
//     );
//   });
// });

// describe("compare dates for students with the same max scores", () => {
//   test("if the dates are the same", () => {
//     expect(
//       bestStudents.name &&
//         bestStudents.score === Math.max &&
//         bestStudents.date === equals
//     ).toEqual(
//       bestStudents[
//         ({ name: "Ivan", score: 35, date: "2022-10-11" },
//         { name: "Stepan", score: 35, date: "2022-10-12" })
//       ]
//     );
//   });
//   test("if the date of the first student is earlier than the date of the second", () => {
//     expect(
//       bestStudents.name &&
//         bestStudents.score === Math.max &&
//         bestStudents[0].date < bestStudents[1].date
//     ).toEqual(bestStudents[{ name: "Ivan", score: 35, date: "2022-10-11" }]);
//   });
//   test("if the date of the second student is earlier than the date of the first", () => {
//     expect(
//       bestStudents.name &&
//         bestStudents.score === Math.max &&
//         bestStudents[0].date > bestStudents[1].date
//     ).toEqual(bestStudents[{ name: "Stepan", score: 35, date: "2022-10-12" }]);
//   });
// });

//parametrized tests
describe("sort the student", () => {
  it.each([
    [
      bestStudents.name && bestStudents.score !== 0 && bestStudents.date,
      [
        bestStudents[
          ({ name: "Ivan", score: 35, date: "2022-10-11" },
          { name: "Stepan", score: 35, date: "2022-10-12" },
          { name: "Natalia", score: 25, date: "2022-10-10" },
          { name: "Marina", score: 25, date: "2022-10-01" },
          { name: "Dmitry", score: 25, date: "2022-10-12" },
          { name: "Zanna", score: 15, date: "2022-10-11" },
          { name: "Oleg", score: 9, date: "2022-10-01" },
          { name: "Maria", score: 5, date: "2022-10-10" },
          { name: "Vladimyr", score: 1, date: "2022-10-11" })
        ],
      ],
    ],
    [
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor,
      [
        bestStudents[
          ({ name: "Oleg", score: 9, date: "2022-10-01" },
          { name: "Marina", score: 25, date: "2022-10-01" })
        ],
      ],
    ],
    [
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date,
      [
        bestStudents[
          ({ name: "Ivan", score: 35, date: "2022-10-11" },
          { name: "Stepan", score: 35, date: "2022-10-12" })
        ],
      ],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.floor &&
        bestStudents.date,
      [bestStudents[{ name: "Vladimyr", score: 1, date: "2022-10-11" }]],
    ],
    [
      bestStudents.name && bestStudents.score === 0 && bestStudents.date,
      [
        bestStudents[
          [
            { name: "Irina", score: 0, date: "2022-10-11" },
            { name: "Vasily", score: 0, date: "2022-10-10" },
            { name: "David", score: 0, date: "2022-10-11" },
            { name: "Kristina", score: 0, date: "2022-10-12" },
            { name: "Varvara", score: 0, date: "2022-10-01" },
            { name: "Tanya", score: 0, date: "2022-10-11" },
            { name: "Olga", score: 0, date: "" },
            { name: "Denis", score: 0, date: "2022-10-02" },
            { name: "Margo", score: 0, date: "2022-10-11" },
          ]
        ],
      ],
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});

describe("compare dates for students with the same max scores", () => {
  it.each([
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === equals,
      [
        bestStudents[
          ({ name: "Ivan", score: 35, date: "2022-10-11" },
          { name: "Stepan", score: 35, date: "2022-10-12" })
        ],
      ],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents[0].date < bestStudents[1].date,
      [bestStudents[{ name: "Ivan", score: 35, date: "2022-10-11" }]],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents[0].date > bestStudents[1].date,
      [bestStudents[{ name: "Stepan", score: 35, date: "2022-10-12" }]],
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});
