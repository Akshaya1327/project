// Basic interactions, chart sample and theme toggle

document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persist to localStorage)
const body = document.body;
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.style.background = '#f6f9fb';
    body.style.color = '#0b1220';
    localStorage.setItem('ht-theme', 'light');
  } else {
    body.classList.add('dark');
    body.style.background = 'linear-gradient(180deg,#071025 0%, #071b2b 60%)';
    body.style.color = '#e6eef6';
    localStorage.setItem('ht-theme', 'dark');
  }
});

// restore theme
(function(){
  const t = localStorage.getItem('ht-theme');
  if (t === 'light') {
    body.classList.remove('dark');
    body.style.background = '#f6f9fb';
    body.style.color = '#0b1220';
  } else {
    body.classList.add('dark');
  }
})();

// Sample heart rate chart using Chart.js
const ctx = document.getElementById('heartChart').getContext('2d');
const gradient = ctx.createLinearGradient(0,0,0,140);
gradient.addColorStop(0,'rgba(96,165,250,0.28)');
gradient.addColorStop(1,'rgba(110,231,183,0.05)');

const heartChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['-50m', '-40m', '-30m', '-20m', '-10m', 'Now'],
    datasets: [{
      label: 'Heart Rate (BPM)',
      data: [72, 75, 79, 82, 80, 78],
      fill: true,
      backgroundColor: gradient,
      borderColor: 'rgba(96,165,250,0.9)',
      tension: 0.3,
      pointRadius: 3,
      pointBackgroundColor: 'rgba(110,231,183,0.9)'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display:false },
        ticks: { color: 'rgba(255,255,255,0.6)' }
      },
      y: {
        beginAtZero: false,
        grid: { color: 'rgba(255,255,255,0.03)' },
        ticks: { color: 'rgba(255,255,255,0.6)' }
      }
    }
  }
});
