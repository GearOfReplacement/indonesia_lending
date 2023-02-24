const $slider = document.querySelector('.slider');
const k = 1.48;

addEventListener('resize', () => {
	$slider.style.height = `${Math.round($slider.clientWidth / k)}px`;
	console.log($slider.clientHeight);
})