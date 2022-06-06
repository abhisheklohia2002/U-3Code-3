



document.getElementById("submit").addEventListener("click",runprogram);
function runprogram(){
    var name1 = document.getElementById("name").value;
var email1 = document.getElementById("email").value;

var address1 = document.getElementById("address").value;
var amount1 = document.getElementById("amount").value;

   
    var arr = JSON.parse(localStorage.getItem("user")) || [];

    var obj = {
        name :name1,
        email : email1,
        address : address1,
        amount : amount1
    }

    arr.push(obj);

    localStorage.setItem("user",JSON.stringify(arr));

}