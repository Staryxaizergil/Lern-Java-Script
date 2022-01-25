
let lengthArray = 10;
let arr = [];

for (i = 0; i < lengthArray; i++) {
	arr.push(Math.round(Math.random() * 100, 1));
	console.log(arr);

}

for (i = 0; i < arr.length; i++) {
	newDiv = document.createElement('div');

	if (arr[i] % 2 == 0) {
		newDiv.innerHTML = `${arr[i]} - четное`;
	} else newDiv.innerHTML = `${arr[i]} - нечетное`;

	newDiv.style.border = '2px solid blue';
	document.body.append(newDiv);
}

let elem = document.getElementsByTagName('div');

elem.addEventListener('click', () => {
	for (let i = 0; i < elem.length; i++)
		elem.remove();
})