let month=prompt("mời bạn tháng để kiểm tra: ");
if(month<=12&&month>=1){
    if(month>=1&&month<=3){
        console.log("tháng bạn nhập là mùa xuân")
    }else if(month>=4&&month<=6){
        console.log("tháng bạn nhập là mùa hạ")
    }else if(month>=7&&month<=9){
        console.log("tháng bạn nhập là mùa thu")
    }else{
        console.log("tháng bạn nhập là mùa đông")
    }
}else{
    console.log("tháng không hợp lệ");
}