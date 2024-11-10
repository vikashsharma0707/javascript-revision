// print date
const now = new Date();
document.write(now,"<br>");

// toDateString
let t = new Date();
document.write(t.toDateString(),"<br>");

// to getdate
let d = new Date();
document.write(d.getDate(),"<br>");

// getfull year
let y = new Date();
document.write(y.getFullYear(),"<br>");

// getmonth
let m= new Date();
document.write(m.getMonth(),"<br>");

// getday
let dy = new Date();
document.write(dy.getDay(),"<br>");

//gethours
let h = new Date();
document.write(h.getHours(),"<br>");

// getminutes
let min = new Date();
document.write(min.getMinutes(),"<br>");

//getseconds
let sec = new Date();
document.write(sec.getSeconds(),"<br>");

// getmili seconds
let mili = new Date();
document.write(mili.getMilliseconds(),"<br>");

// setmethods


// setfullyear
const yr = new Date();
yr.setFullYear(2025)
document.write(yr,"<br>")


// setmonth
const mn = new Date();
mn.setMonth(10)
document.write(mn,"<br>")

// sethours
const hrr = new Date();
hrr.setHours(22);
document.write(hrr,"<br>")

// setminutes
const minn = new Date();
minn.setMinutes(10);
document.write(minn,"<br>")
