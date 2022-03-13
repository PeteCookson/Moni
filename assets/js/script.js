/* Main api */

const api_url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana%2Cterra-luna&vs_currencies=usd";
async function getData() {
    const response = await fetch(
        api_url
    );
    const jsonData = await response.json();
    return jsonData;

}

// Functions

async function coinValue() {
    let coinData = await getData();
    let bitcoin = parseInt(document.getElementById("btcnumber").value * coinData.bitcoin.usd);
    let ethereum = parseInt(document.getElementById("ethnumber").value * coinData.ethereum.usd);
    let binance = parseInt(document.getElementById("bnbnumber").value * coinData.binancecoin.usd);
    let cardano = parseInt(document.getElementById("adanumber").value * coinData.cardano.usd);
    let solana = parseInt(document.getElementById("solnumber").value * coinData.solana.usd);
    let luna = parseInt(document.getElementById("lunanumber").value * coinData['terra-luna'].usd);
    document.getElementById("current-value").innerText = '$' + (bitcoin + ethereum + binance + cardano + solana + luna).toFixed(2);
    //console.log();
    /*new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format.("");*/
}


// Wait for the Dom to finish loading 
document.addEventListener("DOMContentLoaded", function() {
    let submit = document.getElementById("calculateButton");
    submit.addEventListener("click", function checkData() {
        coinValue();
    })


})

/* Chart.js */

const data = {
    labels: ['BITCOIN', 'ETHEREUM', 'BINANCE', 'CARDANO', 'SOLANA', 'LUNA'],
    datasets: [{
        label: 'current value',
        data: [73, 10, 35, 25, 20, 30, ],

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
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);





/*function getCoins(obj) {
    var coinNames = [];

    Object.coins(obj).forEach(function(coin) {
        coinNames.push
    })
}


function createChart() {

}

function currentValue() {
    document.getElementById("c-v").innerText = userInput * logCoins;

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

}*/


/* Modal */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("infoBtn");

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