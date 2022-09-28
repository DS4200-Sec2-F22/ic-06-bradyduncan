// Js File for ic-06
// Brady Duncan and Evan Suslovich
// last modified: 09.28.2022

function submitClicked() {
	//identify the bar
	let bar = document.getElementById('bar');

	//add the 'red' classlist to the bar
	bar.classList.add("red");

}

// add an event handler
document.getElementById("button1").addEventListener("click", submitClicked);
