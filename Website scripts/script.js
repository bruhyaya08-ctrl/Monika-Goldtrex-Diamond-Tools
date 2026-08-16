(function () {
  const WHATSAPP_NUMBER = "918076966239";

  const grid = document.getElementById("productGrid");
  const categoryPills = document.getElementById("categoryPills");
  const brandPills = document.getElementById("brandPills");
  const resultsCount = document.getElementById("resultsCount");

  let activeCategory = "All";
  let activeBrand = "All";

  function money(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
  }

  function waLink(product) {
    const text = `Hi, I'd like to enquire about: ${product.name} (${product.brand}) — is it in stock?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  function uniqueValues(list, key) {
    return Array.from(new Set(list.map((p) => p[key]))).sort();
  }

  function buildPills(container, values, active, onSelect) {
    container.innerHTML = "";
    const all = ["All", ...values];
    all.forEach((val) => {
      const btn = document.createElement("button");
      btn.className = "pill" + (val === active ? " active" : "");
      btn.type = "button";
      btn.textContent = val;
      btn.addEventListener("click", () => onSelect(val));
      container.appendChild(btn);
    });
  }

  function render() {
    const categories = uniqueValues(PRODUCTS, "category");
    const brands = uniqueValues(PRODUCTS, "brand");

    buildPills(categoryPills, categories, activeCategory, (val) => {
      activeCategory = val;
      render();
    });
    buildPills(brandPills, brands, activeBrand, (val) => {
      activeBrand = val;
      render();
    });

    const filtered = PRODUCTS.filter((p) => {
      const catOk = activeCategory === "All" || p.category === activeCategory;
      const brandOk = activeBrand === "All" || p.brand === activeBrand;
      return catOk && brandOk;
    });

    resultsCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"} shown`;

    grid.innerHTML = "";

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No products match this filter yet — call or WhatsApp us to check current stock.";
      grid.appendChild(empty);
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement("article");
      card.className = "tag-card";
      card.innerHTML = `
        <span class="tag-brand">${p.brand}</span>
        <h3>${p.name}</h3>
        <div class="tag-spec">${p.spec || ""}</div>
        <p class="tag-desc">${p.description || ""}</p>
        <div class="tag-foot">
          <div>
            <div class="tag-price">${money(p.price)}</div>
            <span class="unit">${p.unit ? "per " + p.unit : ""}</span>
          </div>
          ${
            p.inStock === false
              ? `<span class="tag-oos">Out of stock</span>`
              : `<a class="wa-btn" href="${waLink(p)}" target="_blank" rel="noopener">Enquire</a>`
          }
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  render();
})();
