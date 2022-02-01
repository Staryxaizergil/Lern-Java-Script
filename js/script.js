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
	function shaffleArray(newArray) {
		let i = newArray.length;
		while (i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let tempi = arr[i];
			let tempj = arr[j];
			newArray[i] = tempj;
			newArray[j] = tempi;
			drawBlock(newArray[i]);
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
		clickCount++;
		if (clickCount === 1) {
			dataNumber = blockInfo;
			outNewDivPair = outNewDiv;
		} else {
			if (clickCount === 2 && dataNumber === blockInfo) {
				outNewDiv.classList.add('color');
				outNewDivPair.classList.add('color');
				clickCount = 0;
				console.log(outNewDivPair);
			} else {
				clickCount = 0;
			};
		};
		// здесь мы знаем какой уже клик
		// если клик первый - запомнить число
		// let prevValue;
		// если клик второй - сравниваем значение
		// если значения равны - оставляем карточки открытыми и перекрашиваем их
		imgCard.classList.toggle('display');
	});
}
let clickCount = 0;