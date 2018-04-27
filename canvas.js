var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'green';
c.fillRect(10, 10, 100, 100);
c.fillRect(150, 150, 100, 100);
c.fillRect(300, 300, 100, 100);

console.log(canvas);