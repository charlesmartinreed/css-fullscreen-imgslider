// DOM variables
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

// Slider variables
const autoSlideIsActive = false;
const slideDuration = 5000;
let slideInterval;

// Methods
const nextSlide = () => {
	//grab the div that has the class of current and remove it
	const current = document.querySelector('.current');
	current.classList.remove('current');

	// check for next slide
	if(current.nextElementSibling) {
		//add current to the next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// go back to the beginning by adding it to the first slider div
		slides[0].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');

	if(current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	} else {
		slides[slides.length - 1].classList.add('current');
	}

	setTimeout(() => current.classList.remove('current'));
}

// Event Listeners
nextBtn.addEventListener('click', e => {
	nextSlide();
});
prevBtn.addEventListener('click', e => {
	prevSlide();
});
