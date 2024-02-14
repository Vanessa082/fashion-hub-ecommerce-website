import { createNavBar } from "./src/components/navbar/navbar.js";

createNavBar(true); // is index page is true

const createBuyNow = (isIndexPage = false) => {
  const baseUrl = isIndexPage ? '.' : '../../..'; // root path

  const temp_late = `
<div class="left-side">
    <h1>Grab Upto 50% Off On <br>Selected Headphone</h1>
    <button id="buy-btn">Buy Now</button>
</div>
<img src="${baseUrl}/public/image/backgroundimg.svg" alt="avatar image" />`;

const buyNow = document.getElementById('buy-now');

buyNow.innerHTML = temp_late;
}

createBuyNow(true)