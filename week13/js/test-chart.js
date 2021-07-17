var lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

// 棒グラフ
const barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
const barData = {
  labels: barLabels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const barConfig = {
  type: 'bar',
  data: barData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

var barChart = new Chart(
  document.getElementById('barChart'),
  barConfig,
);