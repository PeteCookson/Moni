/* Main api */

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana%2Cterra-luna&vs_currencies=usd");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }

    };
}

const logCoins = (coin) => {
    getData(function(data) {
        console.log(data[coin]);
    })
}

logCoins("bitcoin")

// Functions

function coinValue() {
    let bitcoin = document.getElementById("btcnumber");
    let ethereum = document.getElementById("ethnumber");
}

function createChart() {

}

function currentValue() {

}

function totalHoldings() {

}

function totalInvestment() {

}

function totalProfitLoss() {

}

function totalRoi() {

}

function mostProfitable() {

}

function leastProfitable() {

}

/* Chart.js */

const data = {
    labels: ['BTC', 'ETH', 'BNB', 'ADA', 'SOL', 'LUNA'],
    datasets: [{
        label: 'current value',
        data: [23, 10, 35, 25, 20, 30, ],
        backgroundColor: [
            'rgb(242, 169, 0)',
            'rgb(60, 60, 61)',
            'rgb(201, 157, 102)',
            'rgb(85,141,255)',
            'rgb(220,31,255)',
            'rgb(13,54,155)',
        ]
    }]
};

const config = {
    type: 'pie',
    data: data,
}
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/* Modal */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Toggle

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Wait for the Dom to finish loading 
document.addEventListener("DOMContentLoaded", function() {
    let submit = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        alert("You clicked submit!");
    })

})