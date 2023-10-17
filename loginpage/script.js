let username = document.getElementById('username');
let validation = document.getElementById('valid');
username.addEventListener('input', function () {
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let inputValue = username.value
	if(inputValue) {
		if(inputValue.match(valid)) {
			validation.style.display = 'none'
		}
		else {
			validation.style.display = 'block'
		}
	}
	else{
		validation.style.display = 'none'
	}
});
