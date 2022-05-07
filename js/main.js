const modalBtb = document.querySelector(".btn-madal");
const modal = document.querySelector(".modal-wrapper");
const modalInner = document.querySelector(".own-modal");
const modalAlert = document.querySelector(".alert-modal");
const close = document.querySelector(".close");
// ===
const incrementBtn = document.querySelector(".right-btn");
const decrementBtn = document.querySelector(".left-btn");
const productQuantity = document.querySelector(".quontity");
// ===
const elForm = document.querySelector(".form");
const elSendBtn = document.querySelector(".send-btn");
const username = document.getElementById("username");
const phoneNumber = document.getElementById("phone-number");
const chooseProduct = document.getElementById("choose-product");
const alertBtn = document.querySelector('.alert-btn');

elForm.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(`${API_URL}/orders`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name: username.value,
			phone_number: `+998${phoneNumber.value}`,
			product_name: chooseProduct.value,
			product_qountity: productQuantity.innerHTML,
			isDelete: false,
		}),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
});

incrementBtn.onclick = () => {
	++productQuantity.innerHTML;
};

decrementBtn.onclick = () => {
	if (productQuantity.innerHTML >= 2) {
		--productQuantity.innerHTML;
	}
};

modalBtb.onclick = function () {
	modal.style.display = "block";
};

elSendBtn.onclick = function () {
	if (username.value && phoneNumber.value && chooseProduct.value !== 'choose') {
		modalInner.style.display = "none";
		modalAlert.style.display = "block"
	}
};

alertBtn.onclick = function() {
	modal.style.display = "none";
}

close.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
const arrowUp = document.querySelector(".footer-bottom__arrow-up");
window.onscroll = function() {
	if(document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
		arrowUp.style.transform = "translateY(0)"
	} else {
		arrowUp.style.transform = "translateY(100px)"
	}
}
arrowUp.animate([
	{bottom: '40px'},
	{bottom: '60px'},
	{bottom: '40px'}
],{
	duration: 900,
	iterations: Infinity
});