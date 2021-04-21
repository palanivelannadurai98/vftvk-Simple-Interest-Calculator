function compute() {
    if (document.getElementById("principal").value) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerHTML = "If you deposit <span class='highlighted'>" + principal + "</span>,\<br\>at an interest rate of <span class='highlighted'>" + rate + "%</span>,\<br\>You will receive an amount of <span class='highlighted'>" + interest + "</span>,\<br\>in the year <span class='highlighted'>" + year + "</span>\<br\>"
    } else {
        alert('Enter a positive number');
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

function getPrincipalVal() {
    debugger
    var principal = document.getElementById("principal").value;
    if (principal === '0' || principal.includes('-')) {
        alert('Enter a positive number');
        document.getElementById("principal").value = '';
    }
}
