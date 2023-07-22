let res = document.getElementById("result");

function appendToResult(value) {
	res.value += value;
}

function clearResult() {
	res.value = "";
}
function deleteone(){
	res.value = res.value.slice(0, -1)
}

function calculateResult() {
	try {
		res.value = eval(res.value);
	} catch(error) {
		res.value = "***Error***";
	}
}

