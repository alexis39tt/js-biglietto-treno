function TicketPrice(){
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    let price = document.getElementsByClassName("price")[0];
    let total = document.getElementById("total");

    price.style.display = "block";

    finalprice = km*0.21;
    finalprice = Math.round(finalprice*100)/100;
    total.innerHTML = `${finalprice} €`;

}