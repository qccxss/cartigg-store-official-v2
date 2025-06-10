let products = [];

document.getElementById("addProductForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const stock = parseInt(document.getElementById("stock").value);
  const tag = document.getElementById("tag").value;

  const product = {
    id: Date.now(),
    name,
    price,
    stock,
    tag
  };

  products.push(product);
  renderProducts();
  this.reset();
});

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong> - ₺${product.price} | Stock: ${product.stock} | Tag: ${product.tag || "-"}
      <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  renderProducts();
}
