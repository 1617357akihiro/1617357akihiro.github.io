var lineLabels = ['3月1日', '4月1日', '５月1日', '6月1日', '7月1日'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        label: '3月1日から7月1日までの推移　注1',
        borderColor: 'rgb(0, 128, 255)',
        backgroundColor: 'rgb(255, 128, 0)',
        data: [0, 0.7, 2.6, 10.5, 26.2,],
        tension: 0.1
    }]
};

var lineConfig = {
    type: 'line',
    data: lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

const barLabels = ['摂取部位の痛み', '倦怠感', '頭痛', '発熱', 'かゆみ',];
const barData = {
  labels: barLabels,
  datasets: [{
    label: '主な副反応の発生率　注2',
    data: [90, 45, 35, 20, 10,],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
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

function conclusion(language) {
  var message = "";

  if (language == 1) {
      message = "ファイザーとモデルナどちらでも都合のいい方を接種しよう！";
  } else if (language == 2) {
      message = "無理に接種しなくても大丈夫です。";
  } else if (language == 3) {
      message = "モデルナは18歳以上対象なのでファイザーを選びましょう。"
  }

  alert(message);

}
  
