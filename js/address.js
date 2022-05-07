const elAddressBody = document.querySelector(".address-body");
const elCarouselInner = document.querySelector(".inner");

fetch(`${API_URL}/locations`)
	.then((res) => res.json())
	.then((data) => {
		address(data);

		function address(arr) {
			arr.forEach((element) => {
				renderLocation(element);
			});
		}
	});

const renderLocation = (data) => {
	const addressTitle = createElement("h3", "address-body__header", data.address);
	const addressText = createElement("p", "address-body__text", data.description);
	const location = createElement("a", "address-body__btn", "Geolokatsiya");

	location.setAttribute("href", data.location);
	location.setAttribute("target", "_blank ");
	elAddressBody.appendChild(addressTitle);
	elAddressBody.appendChild(addressText);
	elAddressBody.appendChild(location);


	data.location_image.forEach((e) => {
	const carouseItem = createElement("div", "carousel-item");
		const image = createElement("img", "slide-img");
		elCarouselInner.appendChild(carouseItem);
    carouseItem.appendChild(image)
		image.src = e;
	});
};
