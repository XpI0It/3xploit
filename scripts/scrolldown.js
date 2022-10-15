/* 
  <a id="scroll-down-title">Cybersecurity Gamified</a>
  <a id="scroll-down-subtitle">Learn More</a>
  <span class="hscroll-line"></span>
*/

// if anything above is clicked, scroll down to class `info` on the page

window.onload = function () {
	document
		.getElementById('scroll-down-title')
		.addEventListener('click', () => {
			document
				.querySelector('.info')
				.scrollIntoView({ behavior: 'smooth' });
		});

	document
		.getElementById('scroll-down-subtitle')
		.addEventListener('click', () => {
			document
				.querySelector('.info')
				.scrollIntoView({ behavior: 'smooth' });
		});

	document.querySelector('.hscroll-line').addEventListener('click', () => {
		document.querySelector('.info').scrollIntoView({ behavior: 'smooth' });
	});

	/* if user is at half of the screen go to info page */
};
