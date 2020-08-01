let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let cssOutput = document.querySelector('h3');

color1.addEventListener('input', function() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
});

color2.addEventListener('input', function() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
});
