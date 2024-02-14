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

createBuyNow(true);

const createProductInfo = () => {
  const temp = `
  <div class="info-right-side">
    <select name="" id="">
    <optgroup label="Headphone Type">
        <option value="">Headphone Type</option>
      </optgroup>
    </select>
    <select name="" id="">
      <optgroup label="Price">
        <option value="">Price</option>
      </optgroup>
    </select>
    <select name="" id="">
      <optgroup label="Color">
        <option value="" >Color</option>
      </optgroup>
    </select>
    <select name="" id="">
      <optgroup label="Material">
        <option value="" >Material</option>
      </optgroup>
    </select>
    <select name="" id="">
     <optgroup label="Offer">
        <option value="" >Offer</option>
      </optgroup>
    </select>
  </div>
  
  <select name="" id="">
    <option value="" >Headphone Type</option>
  </select>
`

const productInfo = document.getElementById('product-info');

productInfo.innerHTML = temp;
}

createProductInfo()

