let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(x) {
  return x * x;
}
let squareArr = a.map(square);

const mapOverview = (arr,fun) => {
  const squareArr = [];
  for (let ele of arr) {
    squareArr.push(fun(ele));
  }
  return squareArr;
};

function cube(x){
  return x*x*x;
}
// console.log(mapOverview(a,cube));
// console.log(a.map(cube));
// console.log(mapOverview(a,square));
// a

// y=Index 
const newArr = a.map((x,y)=>{
  return Math.pow(x,y);
})

// console.log(newArr);

// filter
function odd(x){
  return x%2;
}
let oddArr = a.filter(odd);
console.log(oddArr);

let evenArr = a.filter((ele)=>{
  return !ele%2;
})

let students = [
  {
    name: "student 1",
    year: 3,
    age: 21,
    gender: "male",
    cgpa: 8,
    backlogs: false
  },
  {
    name: "student 2",
    year: 2,
    age: 20,
    gender: "female",
    cgpa: 7.5,
    backlogs: true
  },
  {
    name: "student 3",
    year: 1,
    age: 18,
    gender: "male",
    cgpa: 6.8,
    backlogs: false
  },
  {
    name: "student 4",
    year: 4,
    age: 22,
    gender: "female",
    cgpa: 8.3,
    backlogs: false
  },
  {
    name: "student 5",
    year: 3,
    age: 21,
    gender: "male",
    cgpa: 7.1,
    backlogs: true
  },
  {
    name: "student 6",
    year: 2,
    age: 19,
    gender: "female",
    cgpa: 8.7,
    backlogs: false
  },
  {
    name: "student 7",
    year: 1,
    age: 18,
    gender: "female",
    cgpa: 6.5,
    backlogs: true
  },
  {
    name: "student 8",
    year: 4,
    age: 23,
    gender: "male",
    cgpa: 9.2,
    backlogs: false
  },
  {
    name: "student 9",
    year: 3,
    age: 20,
    gender: "female",
    cgpa: 7.9,
    backlogs: false
  }
];

let result1 = students.filter((student)=>{
  return student.cgpa >=7.5;
})

let result2 = students.filter((student)=>{
  return student.year===3;
})

let result  = students.filter((student)=>{
  return !student.backlogs && student.cgpa>7 && student.year===3;
})
console.log(result);

let arr = [{name:"hiii",points:400,quantity:2},{name:"hiii",points:400,quantity:5},{name:"hiii",points:400,quantity:2},{name:"hiii",points:400,quantity:1}]
let sum = arr.reduce((accum,ele)=>{
  return accum+(ele.points*ele.quantity);
},0)

let foundStudent = students.find((student)=>{
  return student.name === "student 7";
})

console.log(foundStudent);

