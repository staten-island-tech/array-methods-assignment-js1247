const Athletes = [
  {
    firstName: "Ryan",
    country: "Mexico",
    age: "26",
    sports: ["Basketball, Ping Pong"],
    gender: "Male",
  },
  {
    firstName: "Evan",
    country: "Japan",
    age: "29",
    sports: ["Badminton, Tennis"],
    gender: "Male",
  },
  {
    firstName: "Sophia",
    country: "England",
    age: "24",
    sports: ["Volleyball, Swimming"],
    gender: "Female",
  },
  {
    firstName: "Yifan",
    country: "China",
    age: "30",
    sports: ["Track, Bowling"],
    gender: "Female",
  },
  {
    firstName: "Johnny",
    country: "Africa",
    age: "25",
    sports: ["Soccer, Hockey"],
    gender: "Male",
  },
];
Athletes.forEach((athletes) => {
  console.log(athletes.firstName);
  console.log(athletes.country);
  console.log(athletes.age);
  console.log(athletes.sports);
  console.log(athletes.gender);
});
Athletes.forEach((athletes) => {
  athletes.sports.forEach((sports) =>
  console.log(sports))
});

function genderFiltering() {
  return Athletes.filter((number) => number.gender === "Male");
}
console.log(genderFiltering());