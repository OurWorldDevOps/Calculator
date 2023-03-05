let string = "";
let button = document.querySelectorAll(".num");
// cont back=()=> {
//     var value = document.getElementById("d").value;
//     document.getElementById("d").value = value.substr(0, value.length - 1);
// }
Array.from(button).forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML == "=") {
			string = eval(string);
			document.querySelector("input").value = string;
		}
		// else if (e.target.innerHTML == "b"){
		//     back();
		// }
		else if (e.target.innerHTML == "C") {
			string = " ";
			document.querySelector("input").value = string;
		} else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			document.querySelector("input").value = string;
		}
	});
});
