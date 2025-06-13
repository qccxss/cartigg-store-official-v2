document.addEventListener("DOMContentLoaded", () => {
  const USD_RATE = 100000;

  const categories = [
    {
      name: "🛒・Carti.gg - Store",
      products: [
        { name: "💵・Lifetime Premium", price: 1500000, description: "If You Buy This You Will Get Access To All Premium Categories & Channels For Lifetime." },
        { name: "💵・Lifetime Booster", price: 1000000, description: "If You Buy This You Will Get Access To All Booster Categories & Channels For Lifetime." },
        { name: "💵・Lifetime Partner", price: 6000000, description: "If You Buy This You Will Get Lifetime-Partner ADS & Role." },
        { name: "💵・Server Ads", price: 4000000, description: "If You Buy This You Will Get ADS & Role." }
      ]
    },
    {
      name: "🛒・Fivem - Store",
      products: [
        {
          name: "💵・Special Uniform",
          price: 700000,
          description: "If You Buy This We Will Make You A Special Uniform."
        },
        {
          name: "💵・Special Tweak",
          price: 800000,
          description: "If You Buy This, You Will Be Provided With Appropriate Game Settings and FPS Boosts Specific to Your Device."
        },
        {
          name: "💵・Special Strafe",
          price: 1100000,
          description: "It Will Boost Your Strafe And Allow You To Throw TP Around."
        },
        {
          name: "💵・Private Pack",
          price: 2000000,
          description: "If You Buy This, A Special Skybox, Skin Pack, Citizen, Etc. Will Be Made For You And Delivered In A Short Time."
        }
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
    },
    {
      name: "🛒・Forza Horizon 5 - Store",
      products: [
        { name: "🚧 Soon 🚧", price: null, description: "Soon" }
      ]
    },
        {
      name: "🛒・Forza Horizon 4 - Store",
      products: [
        { name: "🚧 Soon 🚧", price: null, description: "Soon" }
      ]
    },
    {
      name: "🛒・GTA 5 - Store",
      products: [
        { name: "🚧 Soon 🚧", price: null, description: "Soon" }
      ]
    }
  ];
  const productTags = {
    "💵・Special Uniform": ["new"],
    "💵・Special Tweak": ["new"],
    "💵・Special Strafe": ["new"],
    "💵・Private Pack": ["limited"],
    "💵・Lifetime Premium": ["hot"],
    "💵・Lifetime Booster": ["hot"],
    "💵・Lifetime Partner": ["new"],
    "💵・Server Ads": ["new"]
  };


  categories.forEach(cat => {
    cat.products.forEach(p => {
      if (p.name.includes("Soon")) {
        if (!productTags[p.name]) productTags[p.name] = [];
        if (!productTags[p.name].includes("soon")) {
          productTags[p.name].push("soon");
        }
      }
    });
  });

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

      const card = document.createElement("div");
      card.className = "card";

      const tags = productTags[p.name] || [];
      tags.forEach(tag => {
        card.classList.add(tag);

        const tagLabel = document.createElement("span");
        tagLabel.classList.add("tag-label");
        tagLabel.textContent = tag.toUpperCase();
        card.appendChild(tagLabel);
      });

      card.innerHTML += `
        <h3>${p.name}</h3>
        <p><strong>Price:</strong> ${priceText}</p>
        <p class="description">${p.description || ""}</p>
      `;

      if (p.price) {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "Purchase";
        btn.addEventListener("click", () => buy(p.name, p.price));
        card.appendChild(btn);
      }

      grid.appendChild(card);
    });

    section.appendChild(grid);
    store.appendChild(section);
  });

  function buy(name, price) {
    alert(`💸 To Buy This Product, Send This Command To The OwO Bot:\n\nowo give @qccxs ${price}\n\n💸 ! Carti.gg : https://discord.gg/xG32FB9MVp\n\n💸 ! Carti.gg | Store : https://discord.gg/vnFVr2qy7k\n\n🎁 Product: ${name}`);
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
    const viewers = Math.floor(Math.random() * 34532) + 50;
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
});
