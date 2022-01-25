
let lengthArray = 10;
let arr = [];

for (i = 0; i < lengthArray; i++) {
	arr.push(Math.round(Math.random() * 100, 1));
	console.log(arr);

}

for (i = 0; i < arr.length; i++) {
	newDiv = document.createElement('div');
	newDiv.innerHTML = arr[i];
	newDiv.style.border = '2px solid blue';
	document.body.append(newDiv);
}

