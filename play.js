const person = {
  name: "Abdurahman",
  age: 23,
  haveHobbies: true,
};

const arrHobbies = ["football", "reading"];

// arrow function
const sum = (a, b) => a + b;
const sumOne = (a) => a + 1;

//destructuring
const { name, age } = person;
const [hobbies1, hobbies2] = arrHobbies;

// spread operator
const spreadOperator = [...arrHobbies];

// rest operator
const totalSum = (...args) => {
  let total = 0;
  args.map((e) => {
    total += e;
  });
  return total;
};

console.log(name, age);
console.log(hobbies1, hobbies2);
console.log(spreadOperator);
console.log(sum(2, 4));
console.log(sumOne(2));
console.log(totalSum(2, 3, 4, 5, 6));
