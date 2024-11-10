

// sort method
let fruits = ["banana", "appple", "orange", "pineapple"];
document.write(fruits, "<br>");

fruits.sort();
document.write(fruits, "<br>");



// reverse method
let num = [1, 2, 3, 4, 5];
document.write(num, "<br>")

num.reverse();
document.write(num, "<br>")



//pop method
let fruit = ["banana", "appple", "orange", "pineapple"];
document.write(fruit, "<br>");

fruit.pop()
document.write(fruit, "<br>");




// reverse method
let number = [1, 2, 3, 4, 5];
document.write(number, "<br>")

number.push(6)
document.write(number, "<br>")


//shift method
let a= [1,2,3,4,5];
document.write(a,"<br>")

a.shift();
document.write(a,"<br>")



// unshift method
let b= [1,2,3,4,5];
document.write(b,"<br>")

b.unshift(6);
document.write(b,"<br>")


//concat method 
let c =[1,2,3,4,5];
let d = [6,7,8,9];
let e = [10,11,12,13,14]
let f= c.concat(d,e);
document.write(f,"<br><br>")


// join method
let g =[1,2,3,4,5];
let h = [6,7,8,9];
let i= g.join("<br>")
document.write(i +"<br><br>")


// slice method

let n = ["jay","ram","shyam","rahul"];
document.write(n +"<br><br>")

let m = n.slice(1,3)
//let m = n.slice(-1,3)
document.write(m +"<br><br>")



// splice method

let lan = ["java","python","react js","javascript"];
document.write(lan+"<br><br>")

// for moving forward
//lan.splice(2,0,"html","css")

// for delete 
lan.splice(2,1,"html","css")

document.write(lan+"<br><br>")


// isArray method


// let arr = [1,2,3,4,5]
// document.write(arr,"<br>");

// let ar = Array.isArray(arr);
// document.write(ar);


 let arr = [1,2,3,4,5]
 document.write(arr,"<br>")

 if(Array.isArray(arr)){
    document.write("this is an array"+"<br>")
 }

 else{
    document.write("this is not an array")
 }



 // indexOf method


 let index = [1,2,3,3,4];
 let ind = index.indexOf(3,3);
 document.write(ind+"<br>")

//lastindexOf

let last = [1,2,3,4,2];
let lst = last.lastIndexOf(4,2)
document.write(lst+"<br>");


// includes method in java

let include = [1,2,3,4,5];
let indl = include.includes(2);
 //indl = include.includes(6)
document.write(indl+"<br>")



// some method in javascript
let sme = [1,2,3,4,5];
document.write(sme+"<br>")

function check(age){
   return(age>=4)
}

let sm= sme.some(check)
document.write(sm+"<br>")





// every method
let ages = [1,2,3,4,5];
document.write(ages+"<br>");

function checkage(ag){
   return(ag>=4);
}

let age = ages.every(checkage);
document.write(age+"<br>")



// find method

let fnd = [1,2,3,4,5];
document.write(fnd+"<br>");

function checkfnd(ag){
    return(ag>4)
}

let fn = fnd.find(checkfnd);
document.write(fn+"<br>");


// findindexOf
let fof =[1,2,3,4,5];
document.write(fof+"<br>");

function checkof(ag){
    return(ag>4)
}

let findex=fof.findIndex(checkof);
document.write(findex+"<br>");


// filter method
let fit = [1,2,3,4,5];
let fitr = fit.filter((num)=> num>2)
document.write(fitr+"<br>");


let nm = ["jay","ram"];
let nmm = nm.filter((name)=>name=="jay")
document.write(nmm+"<br>");

// toString method

let str = ["java","react js","javascript","nodejs"]
str.toString()
document.write(str+"<br>");
let cstr = Array.isArray(str)
document.write(cstr+"<br>");


// values of 

let val= ["java","react js","javascript","nodejs"]
let vl = val.valueOf();
document.write(vl+"<br>")


// fill method

let fll =  ["java","react js","javascript","nodejs"];
fll.fill("css");
document.write(fll+"<br>");



// foreach loop

let each = [1,2,3,4,5];
each.forEach(function(value,index){
   document.write(index, ":",value,"<br>")
})