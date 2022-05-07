const courselWrapper = document.querySelector('.carousel-inner'); 


fetch(`${API_URL}/slider`)
  .then((response) => response.json())
  .then((data) => {
    slider(data);
    // ==== RENDER SLIDER ITEM =====
    function slider(arr) {
      arr.forEach((element) => {
				renderSlider(element)
      });
    }
  });

let renderSlider = (slide, i) => {
	const newCoruseItem = createElement('div', "carousel-item")
	const heroBody = createElement("div", "hero-body d-flex");
	const heroBLeft = createElement("div",'hero-body-left');
	const title = createElement("p", "title", slide.title)
	const heroBRight = createElement("div", "hero-body-right");
	const image = createElement("img", "images");
	image.src = slide.image_url

	courselWrapper.appendChild(newCoruseItem)
	newCoruseItem.appendChild(heroBody)
	heroBody.appendChild(heroBLeft)
	heroBLeft.appendChild(title)
	heroBody.appendChild(heroBRight)
	heroBRight.appendChild(image)
};

