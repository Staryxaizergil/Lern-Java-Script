
function createBlocks() {
	let lengthArray = document.getElementById("chair").value;
	drawBlocks(lengthArray);
}

function drawBlocks(countBlocks) {
	for (i = 0; i < countBlocks; i++) {
		let value = Math.round(Math.random() * 100, 1);

		let data = {
			value,
			isEven: () => {
				if (value % 2 == 0) {
					return `четное`;
				} else {
					return `нечетное`;
				}
			}
		}

		drawBlock(data);
	}
}

function drawBlock(blockInfo) {
	let newDiv = document.createElement('div');

	newDiv.innerHTML = `${blockInfo.value} - ${blockInfo.isEven()}`;

	document.body.append(newDiv);

	newDiv.classList.add('block');

	newDiv.addEventListener('click', (event) => {
		event.currentTarget.remove();
	});
}



