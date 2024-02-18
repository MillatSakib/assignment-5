let totalseat = parseInt(document.getElementById('seat_avaiable').innerHTML)
let seatTake = 0;
let totalCost = 0;
let grandCost = 0;
let phone = "";
let freeA1 = 1;
let bookA1 = document.getElementById('A1');
bookA1.addEventListener('click', function () {
    if (freeA1) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookA1.style.backgroundColor = "green";
        bookA1.style.color = "white";
        freeA1 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">A1</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }


        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }



    }
    else {
        alert("You selcet this seat before");
    }
})

let freeA2 = 1;
let bookA2 = document.getElementById('A2');
bookA2.addEventListener('click', function () {
    if (freeA2) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookA2.style.backgroundColor = "green";
        bookA2.style.color = "white";
        freeA2 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">A2</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }

        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeA3 = 1;
let bookA3 = document.getElementById('A3');
bookA3.addEventListener('click', function () {
    if (freeA3) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookA3.style.backgroundColor = "green";
        bookA3.style.color = "white";
        freeA3 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">A3</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }

        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeA4 = 1;
let bookA4 = document.getElementById('A4');
bookA4.addEventListener('click', function () {
    if (freeA4) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookA4.style.backgroundColor = "green";
        bookA4.style.color = "white";
        freeA4 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">A4</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }

        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeB1 = 1;
let bookB1 = document.getElementById('B1');
bookB1.addEventListener('click', function () {
    if (freeB1) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookB1.style.backgroundColor = "green";
        bookB1.style.color = "white";
        freeB1 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">B1</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }

        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeB2 = 1;
let bookB2 = document.getElementById('B2');
bookB2.addEventListener('click', function () {
    if (freeB2) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookB2.style.backgroundColor = "green";
        bookB2.style.color = "white";
        freeB2 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">B2</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }

        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeB3 = 1;
let bookB3 = document.getElementById('B3');
bookB3.addEventListener('click', function () {
    if (freeB3) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookB3.style.backgroundColor = "green";
        bookB3.style.color = "white";
        freeB3 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">B3</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }


        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})

let freeB4 = 1;
let bookB4 = document.getElementById('B4');
bookB4.addEventListener('click', function () {
    if (freeB4) {
        if (seatTake >= 4) {
            alert("You can maximum 4 seat!")
            return;
        }
        totalseat--;
        document.getElementById('seat_avaiable').innerHTML = totalseat;
        bookB4.style.backgroundColor = "green";
        bookB4.style.color = "white";
        freeB4 = 0;
        seatTake++;
        document.getElementById('seat_booked').innerHTML = seatTake;
        let table = document.getElementById('tabel_manage').innerHTML;
        table += ` <tr>
                            <td class="px-8 text-center">B4</td>
                            <td class="px-8 text-center">Economy</td>
                            <td class="px-8 text-center">550</td>
                        </tr>`
        document.getElementById('tabel_manage').innerHTML = table;
        totalCost = seatTake * 550;
        grandCost = totalCost;
        document.getElementById('total_price').innerHTML = totalCost;
        document.getElementById('grand_price').innerHTML = grandCost;
        if (seatTake < 4) {
            document.getElementById('coupon_validation').setAttribute("disabled", "");
        } else {
            document.getElementById('coupon_validation').removeAttribute("disabled");
        }


        if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
            document.getElementById('next_btn').disabled = false;
        }
        else {
            document.getElementById('next_btn').disabled = true;
        }


    }
    else {
        alert("You selcet this seat before");
    }
})



document.getElementById('coupon_validation').addEventListener('click', function () {
    let cupon = document.getElementById('cupon').value;
    if (cupon === "NEW15") {
        grandCost = grandCost - ((15 * totalCost) / 100);
        document.getElementById('grand_price').innerHTML = grandCost;
        document.getElementById('coupon_section').style.display = "none";
    }
    else if (cupon === "Couple 20") {
        grandCost = grandCost - ((20 * totalCost) / 100);
        document.getElementById('grand_price').innerHTML = grandCost;
        document.getElementById('coupon_section').style.display = "none";
    }
    else {
        alert("Please enter valid Cupon Code");
        document.getElementById('cupon').value = "";
    }
})
if (seatTake < 4) {
    document.getElementById('coupon_validation').setAttribute("disabled", "");
} else {
    document.getElementById('coupon_validation').removeAttribute("disabled");
}


document.getElementById('phone').addEventListener("input", function () {
    phone = parseInt(document.getElementById('phone').value)
    if (typeof (phone) === 'number' && phone > -1 && seatTake > 0 && String(document.getElementById('phone').value) !== "") {
        document.getElementById('next_btn').disabled = false;
    }
    else {
        document.getElementById('next_btn').disabled = true;
    }
})