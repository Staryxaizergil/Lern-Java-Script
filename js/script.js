let inputPress = document.getElementById("valueNumber");
inputPress.addEventListener("keydown", function (event) {
	if (event.code === 'Enter') {
		createBlocks();
	};
});
function createBlocks() {
	let lengthArray = document.getElementById("valueNumber").value;
	if (lengthArray % 2 == 0) {
		drawBlocks(lengthArray);
	} else {
		alert('Введите четное число');
	};
}
function drawBlocks(countBlocks) {
	let arr = [];
	for (i = 0; i < countBlocks; i += 2) {
		let value = Math.round(Math.random() * 100, 1);
		arr.push(value);
		arr.push(value);
	};
	shaffleArray(arr)
	function shaffleArray(arr) {
		var i = arr.length;
		while (i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tempi = arr[i];
			var tempj = arr[j];
			arr[i] = tempj;
			arr[j] = tempi;
			drawBlock(arr[i]);
		};
	}
}
function drawBlock(blockInfo) {
	let newDiv = document.createElement('div');
	let outNewDiv = document.createElement('div');
	let imgCard = document.createElement('img');

	newDiv.innerHTML = `${blockInfo} `;
	newDiv.classList.add('block');

	imgCard.classList.add('img');
	outNewDiv.classList.add('main__block');
	outNewDiv.append(newDiv);
	outNewDiv.append(imgCard);

	document.body.append(outNewDiv);

	outNewDiv.addEventListener('click', (event) => {
		imgCard.classList.toggle('display');
	});
}
