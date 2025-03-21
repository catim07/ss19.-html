let vnd=+prompt("mời bạn nhập số tiền đổi từ VND sang USD:");
let doiVnd=vnd/23000;
let inVnd=doiVnd.toLocaleString('en-US',{style:'currency',currency:'USD'})
console.log(inVnd);
let usd=+prompt("mời bạn nhập số tiền đổi từ USD sang VND:");
let doiUsd=usd*23000;
let inUsd=doiUsd.toLocaleString('vi-VN',{style:'currency',currency:'VND'})
console.log(inUsd);