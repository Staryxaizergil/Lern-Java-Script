
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
	let outNewDiv = document.createElement('div');
	let text = blockInfo.isEven() ? 'четное' : 'нечетное';

	newDiv.innerHTML = `${blockInfo.value} - ${text}`;

	document.body.append(outNewDiv);

	outNewDiv.classList.add('main__block');

	outNewDiv.append(newDiv);

	newDiv.classList.add('block');

	if (blockInfo.isEven()) {
		newDiv.classList.add('iseven');

	} else {
		newDiv.classList.add('isodd');

	};

	if (newDiv.classList.contains('iseven')) {
		newDiv.addEventListener('click', (event) => {
			newDiv.classList.toggle('isvisible')
		});
	};

	if (newDiv.classList.contains('isodd')) {
		newDiv.addEventListener('click', (event) => {
			newDiv.classList.toggle('img')
		});
	};
}
