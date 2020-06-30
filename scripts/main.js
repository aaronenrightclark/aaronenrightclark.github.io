function shuffle(str) {
	const letters = str.split('');
	let shuffled = [];
	while (letters.length) {
		const index = Math.floor(Math.random() * letters.length);
		shuffled.push(letters[index]);
		letters.splice(index, 1);
	}
	return shuffled.join('');
}

document.querySelector('h1').onclick = function() {
	const heading = document.querySelector('h1');
	heading.textContent = shuffle(heading.textContent);
}

document.querySelector('img').onclick = function() {
	const image = document.querySelector('img');
	console.log(image.getAttribute('src').indexOf('svg'));
	if (image.getAttribute('src').indexOf('svg') > -1) {
		image.setAttribute('src', 'images/tardigrade2.jpg');
	} else {
		image.setAttribute('src', 'images/tardigrade.svg');
	}
}