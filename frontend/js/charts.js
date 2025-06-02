async function drawGoldChart() {
  const res = await fetch('/api/gold-pln');
  const data = await res.json();
  const labels = data.map(d => d.date);
  const values = data.map(d => d.value);

  new Chart(document.getElementById('goldChart'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Gold in PLN',
        data: values,
        borderColor: 'gold',
        fill: false
      }]
    }
  });
}

drawGoldChart();