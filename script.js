const USD_RATE = 100000; // Bu satırı artık kullanmıyoruz ama silmek opsiyonel

const categories = [
  {
    name: "🛒・Carti.gg - Store",
    products: [
      { name: "💵・Lifetime Premium", price: 1500000, description: "If You Buy This You Will Get Access To All Premium Categories & Channels For Lifetime. " },
      { name: "💵・Lifetime Booster", price: 1000000, description: "If You Buy This You Will Get Access To All Booster Categories & Channels For Lifetime. " },
      { name: "💵・Lifetime Partner", price: 6000000, description: "If You Buy This You Will Get Lifetime-Partner ADS & Role " },
      { name: "💵・Server Ads", price: 4000000, description: "If You Buy This You Will Get ADS & Role" }
    ]
  },
  {
    name: "🛒・Fivem - Store",
    products: [
      { name: "💵・Special Uniform", price: null, description: "Soon" },
      { name: "💵・Special Tweak", price: null, description: "Soon" },
      { name: "💵・Special Strafe", price: null, description: "Soon" },
      { name: "💵・Private Pack", price: null, description: "Soon" }
    ]
  },
  {
    name: "🛒・Roblox - Store",
    products: [
      { name: "🚧 Soon 🚧", price: null, description: "Soon" }
    ]
  },
  {
    name: "🛒・Minecraft - Store",
    products: [
      { name: "🚧 Soon 🚧", price: null, description: "Soon" }
    ]
  }
];

const store = document.getElementById("store");

categories.forEach(cat => {
  const section = document.createElement("div");
  section.className = "category";

  const heading = document.createElement("h2");
  heading.textContent = cat.name;
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "product-grid";

  cat.products.forEach(p => {
    const priceText = p.price
      ? `${p.price.toLocaleString()} 🪙 OwO Coin`
      : "🚧 Soon 🚧";

    const buyButton = p.price
      ? `<button class="btn" onclick="buy('${p.name}', ${p.price})">Purchase</button>`
      : "";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Price:</strong> ${priceText}</p>
      <p class="description">${p.description || ""}</p>
      ${buyButton}
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  store.appendChild(section);
});

function buy(name, price) {
  alert(`💸 To buy this product, send this command to the OwO bot:\n\nowo give @qcc ${price} cowoncy\n\n🎁 Product: ${name}`);
}
