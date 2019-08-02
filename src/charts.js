import { labels, clicksData, appearedData, percentageData } from './focus-group.js';

const clicksCtx = document.getElementById('clicks-chart').getContext('2d');
// eslint-disable-next-line no-unused-vars
const clicksChart = new Chart(clicksCtx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '# of clicks',
                data: clicksData,
                backgroundColor: 'black'
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const appearedCtx = document.getElementById('appearance-chart').getContext('2d');
// eslint-disable-next-line no-unused-vars
const appearanceChart = new Chart(appearedCtx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '# of appearances',
                data: appearedData,
                backgroundColor: 'black'
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

const percentageCtx = document.getElementById('percentage-chart');
// eslint-disable-next-line no-unused-vars
const percentageChart = new Chart(percentageCtx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '% time selected when appeared',
                data: percentageData,
                backgroundColor: 'black'
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});