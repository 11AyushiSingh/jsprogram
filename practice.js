// //1. Sort array with numbers using default JS function
// let arr = [1,2,8,6,9,3,'a','b']
//   arr.sort();
//   console.log(arr);

// //2. Sort array with names using default JS function
// let arr1 = ["Ayushi","Richa","Shivangi","Ekta","Steve"]
// arr1.sort();
// console.log(arr1);  

// //4. create a function based on addition, subtraction, multiplication and division
// var operation = (op,num1,num2)=>{
//     switch(op){
//         case "add":
//             return num1+num2;
//         case "sub":
//             return num1-num2;
//         case "mul":
//             return num1*num2;
//         case "div":
//             return num1/num2;
//         default: 
//             return "Invalid";                
//     }
// }
// console.log(operation("add",4,5));
// console.log(operation("sub",4,5));
// console.log(operation("mul",4,5));
// console.log(operation("div",4,5));


// //5 . find vowels in string
// const findvowels = (str) =>{
//     var vowels = "AEIOUaeiou";
//     var vowel = "";
//     for(let i=0;i<str.length;i++){
//         if((vowels.includes(str.charAt(i)))){
//             vowel = vowel+str.charAt(i);
//         }
//     }
//     return vowel;
// }
// const input = "Hii! how are you?";
// const vowelss = findvowels(input);
// console.log(vowelss);

// //6. sort the no without using js function
// const sorting = (arr2)=>{
//     for(let i=0;i<arr2.length;i++){
//         for(let j=0;j<arr2.length-i-1;j++){
//             if(arr2[j]>arr2[j+1]){
//                 const temp = arr2[j];
//                 arr2[j] = arr2[j+1];
//                 arr2[j+1] = temp; 
//             }
//         }
//     }
//     return arr2;
// }
// const unsorted = [1,5,3,9,5,8,2,6]
// const sorted = sorting(unsorted);
// console.log(sorted);

// //7. find even odd. 
// const find = (limit1,limit2)=>{
//     if(limit1>limit2){
//         return;
//     }
//     for(let i=limit1;i<limit2;i++){
//         if(i%2==0){
//             console.log("even is"+" "+i);
//         }
//         else{
//             console.log("odd is"+" "+ i);
//         }
//     }
    
// }
// var s1 = find(1,10)
// console.log(s1);

// //prime between range
// const isPrime = (l,m)=>{
//     let flag;
//     if(l>m||l<2){
//         flag = false;
//         return flag;
//     }
//     if(a%2 ==0){
//         a++;
//     }
//     for(let i = l;i<Math.sqrt(l);i++){

//     }
    
// }



// //8. no to word using switch

// const no = (num)=>{
//     switch(num){
//         case 0:
//             return "zero";
//         case 1: 
//             return "one";
            
//         default:
//             return "other";
//     }
// }
// const num =1;
// const s = no(num)
// console.log(s);

// //10. factorial of the given no

// const fact = (x)=>{
//     if(x==0){
//         return 1;
//     }
//     else{
//         return x*fact(x-1);
//     }
// }
// const n1 = fact(5);
// console.log(n1);


// //3. Sort array of JSON object based on key and value using default JS function

// //let arr3 = [{"FirstName": "Ayushi", "LastName": "Singh"},{"FirstName": "Ekta", "LastName": "Mishra"},
//   //          {"FirstName": "Steve", "LastName": "Mashih"},{"FirstName": "Richa", "LastName": "Tiwari"},]
// //arr3.sort((a,b)=> return (a.FirstName.localeCompare (b.FirstName)));
// //console.log(arr3);

// //9. create a dynamic function to push and pop JSON object to array and return the data

// let arr4 = [{"FirstName": "Ayushi", "LastName": "Singh"},{"FirstName": "Ekta", "LastName": "Mishra"},
//             {"FirstName": "Steve", "LastName": "Mashih"},{"FirstName": "Richa", "LastName": "Tiwari"},]
// var data = {"FirstName": "Shivangi", "LastName": "yadav"}         
// arr4.push(data);
// arr4.pop(data);
// console.log(arr4);

// var object = [{
//     name:"Gokul",
//     role:"Software Engineer"
// },
// {
//     name:"Ayushi",
//     role:"Software Engineer"
// }]
// const compareNames2 = (a,b) => {
//     return a.name.localeCompare(b.name);
// }
// object.sort(compareNames2);
// console.log(object);

// const json = [{ name: "Alice", age: 20 },{ name: "Carol", age: 21 }, { name: "Bob", age: 18 }, ];

// const compareNames = (a, b) => {
//   return a.name.localeCompare(b.name);
// };

// json.sort(compareNames);

// console.log(json); // [{ name: "Alice", age: 20 }, { name: "Carol", age: 21 }, { name: "Bob", age: 18 }]






// //
// var myarray = "AEISSS";
// var vowels = "aeiouAEIOU";

// var ans=[];
// var myarray1 = myarray.split("")
// for(let val of myarray1){
//     if(vowels.includes(val)){
//         ans.push(val)
//         console.log(ans)
        
//         break;
//     }
        
//     else{
//         console.log("No vowels");
//     }
// }

// map usage 
const a =[1,2,3,4,5]
let b = a.map((item)=>{
     return item+10
})
console.log(b)

const prompt=require("prompt-sync");

let input =  prompt("   enter the number of items")
console.log(input)