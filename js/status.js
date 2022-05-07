const elList = document.querySelector('.yil-list');

fetch(`${API_URL}/status`)
.then(res => res.json())
.then(data => {
  status(data)
  function status(arr) {
    arr.forEach(e => {
      renderStatus(e)
    });
  }
});

let renderStatus = (data) => {
  const newItem = createElement("li");
  const p = createElement("p", "year-text", data.status_num)
  const span = createElement("span", "year-span", data.status_text)
  elList.appendChild(newItem)
  newItem.appendChild(p)
  newItem.appendChild(span)
}