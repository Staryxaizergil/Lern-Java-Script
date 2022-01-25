
let lengthArray = 10;
let arr = [];

for (i = 0; i < lengthArray; i++) {
	arr.push(Math.round(Math.random() * 100, 1));
	console.log(arr);

}

for (i = 0; i < arr.length; i++) {
	let newDiv = document.createElement('div');

	console.log(newDiv);


	if (arr[i] % 2 == 0) {
		newDiv.innerHTML = `${arr[i]} - четное`;
	} else {
		newDiv.innerHTML = `${arr[i]} - нечетное`;
	}

	newDiv.style.border = '2px solid blue';
	document.body.append(newDiv);

	newDiv.addEventListener('click', () => {

		newDiv.remove();
	})
}