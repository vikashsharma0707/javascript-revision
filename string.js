
// to UpperCase
let str = "hello javascript";
let nstr = str.toUpperCase();
document.write(nstr,"<br>")

//toLowerCase

let st = "Hello World";
let s= st.toLowerCase()
document.write(s,"<br>")


//trim 
let tr = "  hello world  ";
// let t= tr.trim();
document.write(tr,"<br>")

//slice

let sl = "123456789";
let sc = sl.slice(4,6)
document.write(sc,"<br>")


// concat method

let con = "hello world";
let conc = "this is javascript code"
let res = con.concat(conc);
document.write(res,"<br>")


// replace 

let rep= "hello";
let repl = rep.replace("h","t")
document.write(repl,"<br>")

// replace all
let repall= "hello";
let replall = repall.replaceAll("l","t")
document.write(replall,"<br>")


//charAt

let ch= "hello world";
let chr = ch.charAt(4)
document.write(chr,"<br>")