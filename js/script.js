let inputPress = document.getElementById("chair");
inputPress.addEventListener("keydown", function (event) {
	if (event.code === 'Enter') {
		createBlocks();
	};
});
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
	newDiv.classList.add('block');

	outNewDiv.classList.add('main__block');
	outNewDiv.append(newDiv);

	document.body.append(outNewDiv);

	if (blockInfo.isEven()) {
		newDiv.classList.add('iseven');
		newDiv.addEventListener('click', (event) => {
			newDiv.classList.toggle('isvisible');
		});
	} else {
		newDiv.classList.add('isodd');
		newDiv.addEventListener('click', (event) => {
			newDiv.classList.toggle('img');
		});
	};
}
