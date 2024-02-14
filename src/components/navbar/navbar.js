const createNavBar = () => {
  const baseUrl = window.location.host.includes('github') ? 'fashion-hub-ecommerce-website' : '';

  const template = `
    <div class="left-nav">
      <h1>FashionHub</h1>
      <ul>
        <li class="active">
          Category
          <div style="width: auto">
            <div style="float: left; width: 10%">
              <ul class="subnavbar">
                <li class="active"><a href="#">Men's Categories:</a></li>
                <li class="active"><a href="#">Tops</a></li>
                <li class="active"><a href="#">Bottoms</a></li>
                <li class="active"><a href="#">Shoes and accessories</a></li>
              </ul>
            </div>
            <div style="float: right; width: 10%">
              <ul class="subnavbar">
                <li class="active"><a href="#">Women's Categories:</a></li>
                <li class="active"><a href="#">Tops</a></li>
                <li class="active"><a href="#">Bottoms</a></li>
                <li class="active"><a href="#">Shoes and accessories</a></li>
              </ul>
            </div>
          </div>
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

  // ADD ANY NEED NAV EVENT LISTENERS BELOW
};

export {
  createNavBar,
};
