const elCategoryList = document.querySelector(".product-nav-list");
const elProductsList = document.querySelector(".product-card-list");
const elProductsAksiyaList = document.querySelector(
	".product-card-aksiya-list"
);
const elModalSelect = document.getElementById("choose-product");

fetch(`${API_URL}/categories`)
	.then((res) => res.json())
	.then((data) => {
		const filterCategory = data.filter(e => !e.isDelete)
		categories(filterCategory);
		function categories(arr) {
			arr.forEach((e) => {
				renderCategoires(e);
			});
		}
	});

elCategoryList.onclick = (e) => {
  elProductsList.innerHTML = "";
	elProductsAksiyaList.innerHTML = "";
	productFunction(e.target.dataset.id);
}

let renderCategoires = (data) => {
	const newItem = createElement("li", "product-nav-item");
	newItem.textContent = data.category_name;
	newItem.setAttribute("data-id", data.id);
	elCategoryList.appendChild(newItem);

	// newItem.addEventListener("click", () => {
	//   newItem.classList.remove("active-item")
	//   // newItem.classList.add('active-item');
	// })
};

let = productFunction = (id) => {
	fetch(`${API_URL}/products`)
		.then((res) => res.json())
		.then((data) => {
			if (!id || id == "all") {
				products(data.filter(e => e.isActive));
			}
			const filterProducts = data.filter((e) => e.categoryId == id && e.isActive);

			products(filterProducts);

			function products(arr) {
				arr.forEach((e) => {
					renderProducts(e);
					renderdProductForSelectOp(e);
				});
			}
		});

	let renderProducts = (data) => {
		const newProductItem = createElement("li", "product-card-item");
		const cardItemLeft = createElement("div", "product-card-item-left");
		const cardItemLeftImage = createElement("img", "product-image");
		const cardItemRight = createElement("div", "product-card-item-right");
		const cardItemRightTitle = createElement("h3", "", data.product_name);
		const cardItemRightList = createElement("ul");
		const markWrapper = createElement("div", "mark-wrap");
		const priceWrapper = createElement("div", "price-wrap");
		const newPoductsMark = createElement(
			"span",
			"new-product-btn",
			"Yangi mahsulot"
		);
		const aksiyaProductMark = createElement(
			"span",
			"aksiya-product-btn",
			"Aksiya"
		);
		const aksiyaPrice = createElement(
			"span",
			"price",
			`${data.product_aksiy_price} so'm`
		);

		// ==============
		const cardItemRightWeightItem = createElement("li");
		const cardItemRightWarrantyItem = createElement("li");
		const cardItemRightSizeItem = createElement("li");
		const cardItemRightValumeItem = createElement("li");
		// ==============
		const spanWeightItem = createElement(
			"span",
			"",
			data.product_weigth.map((e) => e.title)
		);
		const spanWarrantyItem = createElement(
			"span",
			"",
			data.product_warranty.map((e) => e.title)
		);
		const spanSizeItem = createElement(
			"span",
			"",
			data.product_size.map((e) => e.title)
		);
		const spanValumeItem = createElement(
			"span",
			"",
			data.product_volume.map((e) => e.title)
		);
		// ==============
		const textWeightItem = createElement(
			"p",
			"",
			data.product_weigth.map((e) => e.value)
		);
		const textWarrantyItem = createElement(
			"p",
			"",
			data.product_warranty.map((e) => e.value)
		);
		const textSizeItem = createElement(
			"p",
			"",
			data.product_size.map((e) => e.value)
		);
		const textValumeItem = createElement(
			"p",
			"",
			data.product_volume.map((e) => e.value)
		);
		// =====
		const cardItemRightPriceTitle = createElement("span", "price-title", "Narxi");
		const cardItemRightInfo = createElement(
			"p",
			"card-info",
			data.product_description
		);
		const cardItemRightPrice = createElement(
			"span",
			"price",
			`${data.product_price} so’m`
		);
		// ===== Buy Button ===
		const cardItemRightBuyBtn = createElement(
			"button",
			"sity-btn",
			"Buyurtma berish"
		);
		const cartIcon = createElement("i", "bi bi-cart-check-fill");
		cardItemRightBuyBtn.appendChild(cartIcon);
		cardItemRightBuyBtn.setAttribute("data-id", data.id);
		// =======
		cardItemLeftImage.src = data.product_image[0];
		cardItemRightBuyBtn.onclick = function () {
			modal.style.display = "block";
		};

		if (data.isNew == true) {
			newPoductsMark.style.display = "flex";
		} else {
			newPoductsMark.style.display = "none";
		}

		elProductsList.appendChild(newProductItem);
		newProductItem.appendChild(cardItemLeft);
		newProductItem.appendChild(cardItemRight);
		cardItemLeft.appendChild(markWrapper);
		markWrapper.appendChild(newPoductsMark);
		markWrapper.appendChild(aksiyaProductMark);
		cardItemLeft.appendChild(cardItemLeftImage);
		cardItemRight.appendChild(cardItemRightTitle);
		cardItemRight.appendChild(cardItemRightList);
		// =============
		cardItemRightList.appendChild(cardItemRightWeightItem);
		cardItemRightList.appendChild(cardItemRightWarrantyItem);
		cardItemRightList.appendChild(cardItemRightSizeItem);
		cardItemRightList.appendChild(cardItemRightValumeItem);
		// =============
		// ===
		cardItemRightWeightItem.appendChild(spanWeightItem);
		cardItemRightWeightItem.appendChild(textWeightItem);
		// ===
		cardItemRightWarrantyItem.appendChild(spanWarrantyItem);
		cardItemRightWarrantyItem.appendChild(textWarrantyItem);
		// ===
		cardItemRightSizeItem.appendChild(spanSizeItem);
		cardItemRightSizeItem.appendChild(textSizeItem);
		// ===
		cardItemRightValumeItem.appendChild(spanValumeItem);
		cardItemRightValumeItem.appendChild(textValumeItem);

		cardItemRight.appendChild(cardItemRightInfo);
		cardItemRight.appendChild(cardItemRightPriceTitle);
		cardItemRight.appendChild(priceWrapper);
		priceWrapper.appendChild(cardItemRightPrice);
		cardItemRight.appendChild(cardItemRightBuyBtn);

		if (data.product_aksiy_price) {
			aksiyaProductMark.style.display = "flex";
			priceWrapper.appendChild(aksiyaPrice);
			cardItemRightPrice.classList.add("old-price");
			elProductsAksiyaList.appendChild(newProductItem)
		} else {
			aksiyaProductMark.style.display = "none";
		}
	};

	let renderdProductForSelectOp = (data) => {
    const newOption = createElement("option", "", data.product_name);
    elModalSelect.appendChild(newOption)
	};
};

productFunction();
