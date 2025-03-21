let num = +prompt("mời bạn nhập số: ");
if (num % 3 == 0 && num % 5 == 0) {
    console.log(` số ${num} chia hết cho cả 3 và 5`);
}else if (num % 3 != 0 && num % 5 != 0) {
    console.log(` số ${num} không chia hết cho cả 3 và 5`);
}