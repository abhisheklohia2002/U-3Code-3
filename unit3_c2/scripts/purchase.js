




var info = JSON.parse(localStorage.getItem("user")) || [];
var amount = document.getElementById("wallet_balance")
amount.append(info[0].amount);
console.log(info[0].amount);

var arr = JSON.parse(localStorage.getItem("purchase"));

var x = document.getElementById("purchased_vouchers");

arr.forEach((elem)=>{

    var div = document.createElement("div");
    div.setAttribute("id","div")
var img = document.createElement("img");
img.setAttribute("id","img");

img.src = elem.image;
//name
var name = document.createElement("p");
name.innerText = elem.name
// price
var price = document.createElement("p");
price.innerText = elem.price;
div.append(img,name,price);
x.append(div);




})





