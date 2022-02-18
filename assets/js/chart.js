/*const labels = [
    'BTC',
    'ETH',
    'BNB',
    'ADA',
    'SOL',
    'LUNA',
];*/

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