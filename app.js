const Athletes = [
  {
    firstName: "Ryan",
    country: "Mexico",
    age: "26",
    sport: "Basketball",
    gender: "Male",
  },
  {
    firstName: "Evan",
    country: "Japan",
    age: "29",
    sport: "Badminton",
    gender: "Male",
  },
  {
    firstName: "Sophia",
    country: "England",
    age: "24",
    sport: "Volleyball",
    gender: "Female",
  },
  {
    firstName: "Yifan",
    country: "China",
    age: "30",
    sport: "Track",
    gender: "Female",
  },
  {
    firstName: "Johnny",
    country: "Africa",
    age: "25",
    sport: "Soccer",
    gender: "Male",
  },
];
Athletes.forEach((athletes) => {
  console.log(athletes.firstName);
  console.log(athletes.country);
  console.log(athletes.age);
  console.log(athletes.sport);
  console.log(athletes.gender);
});
function genderFiltering() {
  return Athletes.filter((number) => number.gender === "Male");
}
console.log(genderFiltering());