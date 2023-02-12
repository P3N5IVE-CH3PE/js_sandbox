let val;

const today = new Date();
let birthday = new Date('9-10-1980');
birthday = new Date('9/10/1980');



val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear()
val = today.getHours();

console.log(val);