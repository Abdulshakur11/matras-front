const elCustomerForm = document.querySelector(".customer-form");
const elCustomerNumber = document.querySelector(".customer-form__input");
const elCustomerSection = document.querySelector(".customer");
const elAcceptedSection = document.querySelector(".successfully-accepted");
const elCustomerSendBtn = document.querySelector('.customer-btn');
const elErrorInput = document.querySelector(".error-input");

elCustomerSendBtn.onclick = function() {
  if(elCustomerNumber.value.split(' ').join('').split("|").join('').length >= 13) {
    elCustomerSection.style.display = "none";
    elAcceptedSection.style.display = "block"
    elErrorInput.style.display = "none"
  } else {
    elErrorInput.style.display = "block"
  }
}


elCustomerForm.addEventListener("submit", (e) => {
	e.preventDefault();
  console.log(elCustomerNumber.value.split(' ').join('').split("|").join(''));
	fetch(`${API_URL}/customers`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			phone_number: elCustomerNumber.value.split(' ').join('').split("|").join(''),
			feed_back: false,
			isDelete: false,
		}),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
});
