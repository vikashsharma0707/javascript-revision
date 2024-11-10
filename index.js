
// array print
const marks = [1,2,3,4,5]
console.log(marks);
// array length
console.log(marks.length)
console.log(marks[1]);
// array value cahnged
marks[4]=10;
console.log(marks[4]);


// array string print
const fruits = ["apple","banana","orange","pineapple"];
console.log(fruits);
console.log(fruits.length);


// array loop
const mark = [1,2,3,4,5];
for(let i=0;i<mark.length;i++){
    console.log(mark[i])
}

//for of loop

const alphabet =["a","b","c","d","e"];
 for(let alpha of alphabet){
    console.log(alpha)
 }


 //sum and average in array

 const value = [10,20,30,40,50];
 let sum=0;
 let average=0;
 for(let i=0;i<value.length;i++){
   sum=sum+value[i];
 }

 console.log("sum of total value is :",sum);

average=sum/5;
console.log(average)




// 10% offer
const val = [10,20,30,40,50];

for(let i=0;i<val.length;i++){
    console.log("values are :",val[i]);
    let offer = val[i]*10/100;
    console.log("offer value is :",offer);
    
    val[i]=val[i]-offer;
    console.log("final value  is :",val[i]);
 
}