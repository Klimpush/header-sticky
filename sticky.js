const doc = document;
const w = window;

let scrollPos = w.scrollY;
let header = doc.querySelector('.js-header');
let headerOffset = header.offsetHeight;

w.addEventListener('scroll', function () {
	scrollPos = w.scrollY;
	if(scrollPos >= headerOffset) {
		header.classList.add('active');
	}
	else {
		header.classList.remove('active');
	}
});
