
   


async function showData(){
   

    try{
        url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
        let data = await fetch(url);
        let res = await data.json();
        console.log(res[0].vouchers);
        append(res[0].vouchers);

    }
    catch(error){
        console.log(error);

    }
}
showData();


var info = JSON.parse(localStorage.getItem("user")) || [];
var amount = document.getElementById("wallet_balance")
amount.append(info[0].amount);
console.log(info[0].amount);






// append data 
function append(data){
    console.log("data",data);
    var box = document.getElementById("voucher_list")
    data.forEach((elem)=>{
        //image
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

var btn = document.createElement("button");
btn.setAttribute("class","buy_voucher");

btn.innerText = "Buy";
btn.addEventListener("click",function(){
    data_Info(elem)
})


div.append(img,name,price,btn);
box.append(div)






   })
}

function data_Info(elem){



    var arr = JSON.parse(localStorage.getItem("purchase")) || [];
    arr.push(elem);
    






    var info = JSON.parse(localStorage.getItem("user")) || [];
var amount = document.getElementById("wallet_balance")
amount.innerHTML = null
var num = Number(info[0].amount);



if(num >= Number(elem.price) ){
    // localStorage.setItem("purchase",JSON.stringify(arr));
    var update = Math.abs(num-Number(elem.price));
    amount.append(update);
   alert("Hurray! purchase successful");
   info[0].amount = update;
//    info.push(info[0].amount);
   
    localStorage.setItem("purchase",JSON.stringify(arr));

    localStorage.setItem("user",json.stringify(info[0].amount));


  
window.location.reload();






}
else{
    alert("Sorry! insufficient balance");

}
   





   

}