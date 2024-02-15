const createNavBar = (isIndexPage = false) => {
  const baseUrl = isIndexPage ? '.' : '../../..'; // root path

  const template = `
    <div class="left-nav">
      <h1><a href="${baseUrl}/index.html">FashionHub</a></h1>
      <ul>
        <li class="category">
          Category
          <ul class="sub-category">
            <li class="active"><a href="#">Women's Categories:</a></li>
            <li class="active"><a href="#">Tops</a></li>
            <li class="active"><a href="#">Bottoms</a></li>
            <li class="active"><a href="#">Shoes and accessories</a></li>
          </ul>
        </li>
        <li>Brand</li>
        <li><a href='${baseUrl}/src/pages/contact/contact.html'>Contact</a></li>
        <li>FAQs</li>
      </ul>
    </div>

    <div class="right-nav">
      <img src="${baseUrl}/public/image/card.svg" alt="shopping-card" class="shopping-card">
      <img src="${baseUrl}/public/image/notification.svg" alt="notification-icon" class="notification-icon">
      <div class="user-profile">
        <img src="${baseUrl}/public/image/profile.svg" alt="user-profile">
        <div class="details">
          <span class="greetings">Good morning!</span>
          <span class="username">Scarlet Johnson</span>
        </div>
      </div>
    </div>
`;

  const navBar = document.getElementById('navbar');

  navBar.innerHTML = template;


  const displayCategory = document.querySelector('sub-category')


  // ADD ANY NEED NAV EVENT LISTENERS BELOW
};

export {
  createNavBar,
};
