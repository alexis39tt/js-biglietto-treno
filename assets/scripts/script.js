function TicketPrice() {
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    let price = document.getElementsByClassName("price")[0];
    let total = document.getElementById("total");

    price.style.display = "block";

    finalprice = km * 0.21;
    if (age < 18) {
        finalprice = finalprice - finalprice * 20 / 100;
    }
    else if (age >= 65) {
        finalprice = finalprice - finalprice * 40 / 100;
    }

    finalprice = Math.round(finalprice * 100) / 100;
    total.innerHTML = `${finalprice} €`;
}