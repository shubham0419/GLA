let arr = [13,22,33,1,5,10,2,5];

let IncreasingOrder = arr.sort((a,b)=>{
  return a-b;
});

console.log(IncreasingOrder);

let decreasingOrder = arr.sort((a,b)=>{
  return b-a;
});

console.log(decreasingOrder);

let products = [
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:500,
  },
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:800,
  },
  {
    name:"coffee dark",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:900,
  },
  {
    name:"coffee",
    mfg:"22/10/2024",
    exp:"20/10/2026",
    price:700,
  },
]

let incProduct = products.sort((a,b)=>{
  return a.price - b.price;
})