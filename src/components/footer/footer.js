const createFooter = (isIndexPage = false) => {
  const baseUrl = isIndexPage ? '.' : '../../..';

  const template = `   
  <h2>Brands we sell</h2>
  <div class="imgOfBrands">
    <img src="${baseUrl}" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
  </div>`;

  const footerSection = document.getElementById('footer');
  footerSection.innerHTML = template;
}

export {
  createFooter,
}