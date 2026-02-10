let logo = document.querySelector(".logo");
let cards = document.querySelector(".product-grid");
let URL = "./data.json";
let first = document.querySelector(".shop-hero");
let second = document.querySelector(".main-container");
let third = document.querySelector(".site-footer");
async function add() {
  let promise = await fetch(URL);
  let data = await promise.json();
  for (let i = 0; i < data.length; i++) {
    let product = document.createElement("div");
    product.innerHTML = ` <div class="product-card">
            <div class="img-wrapper">
              <img
                src="${data[i].image}"
                alt="Product"
              />
            </div>
            <div class="product-info">
              <h3>${data[i].name}</h3>
              <p><b style = "color:orange;font-size:15px">Price:</b> $${data[i].price}</p>
              <p><b style = "font-size:15px"">Category:</b> ${data[i].category}</p>
              <p><b style = "font-size:15px"">Color:</b>${data[i].color}</p>
              <div class="swatches">
                <span class="s-blue"></span><span class="s-grey"></span
                ><span class="s-tan"></span>
              </div>
            </div>
          </div>`;
    cards.appendChild(product);
    let icon = product.querySelector("img");
    icon.addEventListener("click", function () {
      first.classList.add("product");
      second.classList.add("product");
      third.classList.add("product");

      let pro = document.querySelector(".not");
      pro.innerHTML = ` <div class="product-page">
      <div class="product-gallery">
        <div class="gallery-indicators">
          <span class="dot"></span>
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="main-image-container">
          <img
            src="${data[i].image}"
            alt="Axiom Backpack"
            class="main-image"
          />
        </div>
       
      </div>

      <div class="product-details">
        <div class="close-icon">✕</div>

        <header class="detail-header">
          <span class="brand-name">CITIZEN</span>
          <h1 class="product-title">${data[i].name}</h1>
          <p class="model-number">${data[i].category}</p>
        </header>

        <div class="detail-section">
          <label class="section-label">${data[i].color}</label>
          <div class="swatches">
            <span class="swatch black active"></span>
            <span class="swatch beige"></span>
            <span class="swatch navy"></span>
            <span class="swatch brown"></span>
            <span class="swatch tan"></span>
          </div>
        </div>

        <div class="specs-grid">
          <div class="spec-item">
            <span class="spec-label">MATERIAL</span>
            <div class="spec-values">
              <p><span>Movement</span> Eco-Drive H504</p>
              <p><span>Case Size</span> 43mm</p>
              <p><span>Material</span> Silver-tone Stainless Steel</p>
            </div>
          </div>
        </div>

        <div class="purchase-section">
          <label class="section-label">PRODUCT SECTION</label>
          <div class="price-action">
            <span class="price">$${data[i].price}</span>
            <div class="button-group">
              <button class="add-to-cart">ADD TO CART</button>
              <button class="wishlist">♡</button>
            </div>
          </div>
        </div>

        <footer class="detail-footer">
          <a href="#">DETAILS</a>
          <a href="#">FEATURES</a>
          <a href="#">SHIPPING</a>
          <a href="#">CARE INSTRUCTIONS</a>
        </footer>
      </div>
    </div>`;

      let closeicon = pro.querySelector(".close-icon");
      closeicon.addEventListener("click", function () {
        first.classList.remove("product");
        second.classList.remove("product");
        third.classList.remove("product");
        pro.classList.remove("product");
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", add);
