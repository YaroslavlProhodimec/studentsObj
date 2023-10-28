const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "sasha", age: 18 },
];

const studentsObj = (arr) => {
  let newObj = {};

  for (let i = 0; i < arr.length; i++) {
    newObj[arr[i].age] = newObj[arr[i].age]
      ? [...newObj[arr[i].age], arr[i].name]
      : [arr[i].name];
  }

  return newObj;
};
console.log(studentsObj(students));
