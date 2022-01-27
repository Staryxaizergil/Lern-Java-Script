
getChair = function () {
	let lengthArray = document.getElementsById("chair").value;
}


/*let lengthArray = document.getElementById('chair').value;
console.log(lengthArray);
*/
let arr = [];

for (i = 0; i < lengthArray; i++) {
	arr.push(Math.round(Math.random() * 100, 1));
}

for (i = 0; i < arr.length; i++) {
	let newDiv = document.createElement('div');

	if (arr[i] % 2 == 0) {
		newDiv.innerHTML = `${arr[i]} - четное`;
	} else {
		newDiv.innerHTML = `${arr[i]} - нечетное`;
	}

	document.body.append(newDiv);

	newDiv.classList.add('block');

	newDiv.addEventListener('click', () => {
		newDiv.remove();
	});
}