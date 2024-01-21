const bestStudents = require(`./ bestStudents`);
const students = require("./student-data.json");

describe("analise students[0]", () => {
  test("find students with max scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date
    ).toEqual(
      students[
        ({ name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Stepan", score: 35, date: "2022-10-12" })
      ]
    );
  });

  test("find students with min scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date
    ).toEqual(students[{ name: "Vladimyr", score: 1, date: "2022-10-11" }]);
  });

  test("find the student who passed the test first", () => {
    expect(
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor
    ).toEqual(bestStudents[{ name: "Oleg", score: 9, date: "2022-10-01" }]);
  });

  test("find the best students with max scores", () => {
    expect(
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor
    ).toEqual(students[{ name: "Ivan", score: 35, date: "2022-10-11" }]);
  });
});

describe("analise students[1]", () => {
  test("find students with max scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date
    ).toEqual(
      students[
        ({ name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-12" })
      ]
    );
  });

  test("find students with min scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date
    ).toEqual(
      students[
        ({ name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Denis", score: 0, date: "2022-10-02" })
      ]
    );
  });

  test("find the student who passed the test first", () => {
    expect(
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor
    ).toEqual(bestStudents[{ name: "Marina", score: 25, date: "2022-10-01" }]);
  });

  test("find the best students with max scores", () => {
    expect(
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor
    ).toEqual(students[{ name: "Marina", score: 25, date: "2022-10-01" }]);
  });
});

describe("analise students[2]", () => {
  test("find students with max scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date
    ).toBeUndefined();
  });

  test("find students with min scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date
    ).toEqual(
      students[
        ({ name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvara", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" })
      ]
    );
  });

  test("find the student who passed the test first", () => {
    expect(
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor
    ).toBeUndefined();
  });

  test("find the best students with max scores", () => {
    expect(
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor
    ).toBeUndefined();
  });
});

describe("analise bestStudents", () => {
  test("find students with max scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date
    ).toEqual(
      students[
        ({ name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Stepan", score: 35, date: "2022-10-12" })
      ]
    );
  });

  test("find students with min scores", () => {
    expect(
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date
    ).toEqual(students[{ name: "Vladimyr", score: 1, date: "2022-10-11" }]);
  });

  test("find the student who passed the test first", () => {
    expect(
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor
    ).toEqual(
      bestStudents[
        ({ name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Marina", score: 25, date: "2022-10-01" })
      ]
    );
  });

  test("find the best students with max scores", () => {
    expect(
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor
    ).toEqual(students[{ name: "Ivan", score: 35, date: "2022-10-11" }]);
  });
});

//parametrized tests

describe("analise students[0]", () => {
  it.each([
    [
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date,
      [
        ({ name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Stepan", score: 35, date: "2022-10-12" }),
      ],
    ],
    [
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date,
      [{ name: "Vladimyr", score: 1, date: "2022-10-11" }],
    ],
    [
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor,
      [{ name: "Oleg", score: 9, date: "2022-10-01" }],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor,
      [{ name: "Ivan", score: 35, date: "2022-10-11" }],
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});

describe("analise students[1]", () => {
  it.each([
    [
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date,
      [
        ({ name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-12" }),
      ],
    ],
    [
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date,
      [
        ({ name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Denis", score: 0, date: "2022-10-02" }),
      ],
    ],
    [
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor,
      [{ name: "Marina", score: 25, date: "2022-10-01" }],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor,
      [{ name: "Marina", score: 25, date: "2022-10-01" }],
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});

describe("analise students[2]", () => {
  it.each([
    [
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date,
      "there aren't roots",
    ],
    [
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date,
      [
        ({ name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvara", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" }),
      ],
    ],
    [
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor,
      "there aren't roots",
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor,
      "there aren't roots",
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});

describe("analise bestStudents", () => {
  it.each([
    [
      bestStudents.name && bestStudents.score === Math.max && bestStudents.date,
      [
        ({ name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Stepan", score: 35, date: "2022-10-12" }),
      ],
    ],
    [
      bestStudents.name && bestStudents.score === Math.min && bestStudents.date,
      [{ name: "Vladimyr", score: 1, date: "2022-10-11" }],
    ],
    [
      bestStudents.name &&
        bestStudents.score !== 0 &&
        bestStudents.date === Math.floor,
      [{ name: "Marina", score: 25, date: "2022-10-01" }],
    ],
    [
      bestStudents.name &&
        bestStudents.score === Math.max &&
        bestStudents.date === Math.floor,
      [{ name: "Ivan", score: 35, date: "2022-10-11" }],
    ],
  ])("variable values %p obtained roots %p", () => {
    expect(
      bestStudents.name && bestStudents.score && bestStudents.date
    ).toEqual(bestStudents[{}]);
  });
});
