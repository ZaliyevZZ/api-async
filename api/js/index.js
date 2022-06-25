async function getCoders() {
  let promise = await fetch("https://json-fake-api.herokuapp.com/designers");

  let result = await promise.json();

  let newArr = result.map((item) => {
    return `<div class="col-md-4">
    <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${item.id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.first_name}</h6>
      <a href="#" class="card-link">${item.email}</a>
    </div>
  </div>
  </div>`;
  });

  let card = newArr.join("");
  document.querySelector(".row").innerHTML = card;
}

getCoders();
