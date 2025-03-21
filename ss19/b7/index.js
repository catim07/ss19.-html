let num1=prompt("mời bạn nhập số thứ nhất: ");
let num2=prompt("mời bạn nhập số thứ hai: ");
let num3=prompt("mời bạn nhập số thứ ba: ");
let max=(num1>num2)?(num1>num3?num1:num3):(num2>num3?num2:num3);
console.log("số lớn nhất là: "+ max);