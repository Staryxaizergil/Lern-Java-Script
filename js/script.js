
/*function createBlocks() {
	let lengthArray = document.getElementById("chair").value;
	drawBlocks(lengthArray);
}

function drawBlocks(countBlocks) {
	for (i = 0; i < countBlocks; i++) {
		let value = Math.round(Math.random() * 100, 1);

		drawBlock(value);
	}
}

function drawBlock(num) {
	let newDiv = document.createElement('div');

	if (num % 2 == 0) {
		newDiv.innerHTML = `${num} - четное`;
	} else {
		newDiv.innerHTML = `${num} - нечетное`;
	}

	document.body.append(newDiv);

	newDiv.classList.add('block');

	newDiv.addEventListener('click', (event) => {
		event.currentTarget.remove();
	});
}

function hiddenText() {
	let text = document.getElementById('text');
	console.log(text);
	text.hidden = true;
}*/

let menu = document.getElementById('sweets');

function toggleMenu() {
	let isOpened = menu.classList.contains('open');

	if (isOpened) {
		menu.classList.remove('open');
	} else {
		menu.classList.add('open');
	};
}

menu.addEventListener('click', toggleMenu);




/*let lengthArray = document.getElementById('chair').value;
console.log(lengthArray);
*/

