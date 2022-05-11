const elTechnologyList = document.querySelector(".texnology-list");

fetch(`${API_URL}/technology`)
	.then((res) => res.json())
	.then((data) => {
		const filterTeachologies = data.filter(e => !e.isDelete);
		technologies(filterTeachologies);

		function technologies(arr) {
			arr.forEach((e) => {
				renderTechonology(e);
			});
		}
});

let renderTechonology = (data) => {
	const newItem = createElement("li");
	const itemSpan = createElement("span", "", data.tech_name);
	const videoWrapper = createElement("div", "texnology-video");
	const videoLink = createElement("a");
	const vidoeImage = createElement("img");
	const itemText = createElement("p", "", data.tech_description);
  videoLink.setAttribute("href", data.tech_video);
  videoLink.setAttribute("target", "_blanck");
	vidoeImage.src = data.tech_image[0];

	elTechnologyList.appendChild(newItem);
	newItem.appendChild(itemSpan);
	newItem.appendChild(videoWrapper);
	videoWrapper.appendChild(videoLink);
	videoLink.appendChild(vidoeImage);
	newItem.appendChild(itemText);
};
