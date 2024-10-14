// let arr = [1,2,3,4,5,6,7,8];

// // for(let i =0;i<arr.length;i++){
// //   console.log(arr[i]);
// // }

// // for(let item of arr){
// //   console.log(item);
// // }

// let obj = {
//   name:"Kuch bhi",
//   section:"A",
//   rollNo : 20,
//   year:3
// }

// let key = "year";
// console.log(obj);
// console.log(obj.year);

// console.log(obj[key]);

// complex objects

let student = {
  name: "this is name",
  DOB: "19/04/2000",
  addreses: {
    premanent: {
      street: 3,
      appartment: "Wz-283/74",
      floor: 2,
    },
    current: {
      street: 10,
      appartment: "Wa-213/104",
      floor: 6,
    },
  },
};
// console.log("prmanent adrees of -", student.name);
// console.log(`Street - ${student.addreses.premanent.street}`);
// console.log(`appartment - ${student.addreses.premanent.appartment}`);
// console.log(`floor - ${student.addreses.premanent.floor}`);

// console.log(`student DOB : ${student.DOB}`);

let students = [
  {
    name: "Student 1",
    DOB: "19/04/2000",
    addreses: {
      premanent: {
        street: 3,
        appartment: "Wz-283/74",
        floor: 2,
      },
      current: {
        street: 10,
        appartment: "Wa-213/104",
        floor: 6,
      },
    },
  },{
    name: "Student 2",
    DOB: "19/04/2000",
    addreses: {
      premanent: {
        street: 3,
        appartment: "Wz-283/74",
        floor: 2,
      },
      current: {
        street: 10,
        appartment: "Wa-213/104",
        floor: 6,
      },
    },
  },{
    name: "Student 3",
    DOB: "19/04/2000",
    addreses: {
      premanent: {
        street: 3,
        appartment: "Wz-283/74",
        floor: 2,
      },
      current: {
        street: 10,
        appartment: "Wa-213/104",
        floor: 6,
      },
    },
  },
];
// for(let key in student){
//   console.log(`${key} -> ${student[key]}`);
// }

for(let student of students){
  console.log(`Student Name: ${student.name}`);
  console.log(`Student Address: street -${student.addreses.premanent.street} ,
    appartment - ${student.addreses.premanent.appartment} ,
    floor - ${student.addreses.premanent.appartment}` );
    console.log("");
}


