
function createBlocks() {
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

/*let lengthArray = document.getElementById('chair').value;
console.log(lengthArray);
*/
