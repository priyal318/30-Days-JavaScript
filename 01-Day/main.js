//Arrays

//1.create Arrays

let marks=[23,39,43,78,93];
marks[1];

//2.modify array's values

let arr=[1,2,3,4,5];
arr[3]=6;
console.log(arr);

//3.Methods Of Arrays

let array=[27,94,20,90,45,89];

array.push(6000);

array.pop();

array.unshift(3);//adds value at 0 index

array.shift(94); //default remove element from 0th index or simillar as pop()

array.splice(2,2);

let newarr=array.slice(0,4);

//reverse method

let arr3=[23,67,35,96];
arr3.reverse();

let ascending=arr3.sort(function(a,b){
    return a-b;
})

let descending=arr3.sort(function(p,q){
    return p-q;
})

//for-Each

let arr4=[2,5,8,1,34,76];
arr4.forEach(function(val){
    console.log(val);
})

//Map method is used when we want to create new array and that array depends or previous array 

let arr5=[13,56,34,97,23];

let mapnew=arr5.map(function(val){
    return 23;
})
// output is [23,23,23,23,23]

let arr6=[12,45,76,29,20];
let mapnew2=arr6.map(function(val){
    if(val>40){
        return val
    }
    });

//output is
//undefined,45,76,undefined,undefined

//filter method can returns only true or false 

let arr7=[3,5,6,7,8,2,4,89,66,44]
let filter1=arr7.filter(function(val){
    if(val>4){
        return true;
    }
});

//reduce method ek array se ek value banana
 let arr8=[1,2,3,4,5,6];
 let ans=arr.reduce(function(accumulator,val){
    return accumulator+val;
 },0);

 //find
 
 let arr9=[
    {id:1,key:1},
    {id:2,key:2},
    {id:3,key:1}
 ];
 
 // find method 

 let va=arr9.find(function(val){
    return val.key===1;
 });

 //some method

 let arr10=[10,3,2,1];
 let even=arr10.some(function(val){
    return val>5;
 });

 //destructuring  values of array in different variable

 let arr00=[1,2,3,4,5];
 let[a,b]=arr00;

 //use .map() to square each number

 let arr001=[1,2,3,4];
 let square=arr001.map(function(val){
    return val*val;
 });

 //use  .reduce()  to find the sum of array

 let arr002=[1,2,3,4,5,6];
  let sum3=arr002.reduce(function(acc,val){
    return acc+val;
  },0);

  //use .find() to get the first number less than 10

  let arr003=[10,12,3];
  let less=arr003.find(function(val){
    return val<10;
  });
