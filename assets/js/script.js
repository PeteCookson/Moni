//Cryptocurrency API
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
    document.getElementById("current-value").innerText = '$' + (bitcoin + ethereum + binance + cardano + solana + luna).toLocaleString() + '.00USD';
}

// Wait for the Dom to finish loading 
document.addEventListener("DOMContentLoaded", function() {});
// 
document.getElementById("calculateButton").addEventListener("click", function() {
    coinValue();
    updateData();
})

/* Chart.js */
const data = {
    labels: ['BITCOIN', 'ETHEREUM', 'BINANCE', 'CARDANO', 'SOLANA', 'LUNA'],
    datasets: [{
        label: 'current value',
        data: [70, 40, 36, 48, 50, 56],

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

function updateData() {
    data.data.datasets[0].data = coinValue;
    data.update();

    /*function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();*/
}
/*function RandomData() {
    var newData = [];
    for (var i = 0; i < 7; i++) {
        newData.push((()))
    }
    myLineChart.data.datasets[0].data = newData;
    myLineChart.update();
}*/

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
const chart = new Chart(document.getElementById('myChart'),
    config
);


//Info Modal 
const modal = document.getElementById("myModal");
const btn = document.getElementById("infoBtn");
const span = document.getElementsByClassName("close-info")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Contact Modal 
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const contactSpan = document.getElementsByClassName("close-contact")[0];
contactBtn.onclick = function() {
    contactModal.style.display = "block";
}
contactSpan.onclick = function() {
    contactModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
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