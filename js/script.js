
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
					return true;
				} else {
					return false;
				}
			}
		}

		drawBlock(data);
	}
}

function drawBlock(blockInfo) {
	let newDiv = document.createElement('div');

	let text = (blockInfo.isEven()) ? 'четное' : 'нечетное';

	newDiv.innerHTML = `${blockInfo.value} - ${text}`;

	document.body.append(newDiv);

	newDiv.classList.add('block');

	newDiv.addEventListener('click', (event) => {
		event.currentTarget.remove();
	});

	if (blockInfo.isEven()) {
		changeBorderEven(newDiv);
	} else {
		changeBorderOdd(newDiv)
	};
}

function changeBorderEven(hoverDiv) {
	hoverDiv.addEventListener('mouseover', () => {
		hoverDiv.classList.add('iseven');
	});
	hoverDiv.addEventListener('mouseout', () => {
		hoverDiv.classList.remove('iseven');
	});
}
function changeBorderOdd(hoverDiv) {
	hoverDiv.addEventListener('mouseover', () => {
		hoverDiv.classList.add('isodd');
	});
	hoverDiv.addEventListener('mouseout', () => {
		hoverDiv.classList.remove('isodd');
	});
}