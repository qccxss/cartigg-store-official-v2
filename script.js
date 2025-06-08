const USD_RATE = 100000; 

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
  alert(`💸 To buy this product, send this command to the OwO bot:\n\nowo give @qccxs ${price} cowoncy\n\n🎁 Product: ${name}`);
}




const eventDate = new Date("2025-06-30T20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("time").textContent = "The Giveaway Has Started!";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("time").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

function updateViewers() {
  const viewers = Math.floor(Math.random() * 5000) + 50;
  document.getElementById('viewers').textContent = viewers;
}


updateViewers();
setInterval(updateViewers, 5000);

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#b388ff" },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.7,
      "random": false
    },
    "size": {
      "value": 2,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 150, "line_linked": { "opacity": 0.4 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});