const createNavBar = (isIndexPage = false) => {
  const baseUrl = isIndexPage ? '.' : '../../..'; // root path

  const template = `
    <div class="left-nav">
      <h1><a href="${baseUrl}/index.html">FashionHub</a></h1>
      <ul>
        <li class="category">
          Category
          <ul class="sub-category">
            <!-- <li class="active"><a href="#">Women's Categories:</a></li> -->
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

  const displayCategory = document.querySelector('.sub-category');

  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        const category = res[i];
        const tag_hash = '#' + category;
        const window_hash = window.location.hash;

        const list = document.createElement('li');
        const a = document.createElement('a');
        a.href = tag_hash;
        a.innerHTML = category;

        if (tag_hash === window_hash) {
          a.classList.add('active');
        }

        list.appendChild(a);
        displayCategory.appendChild(list);
      }

      addFunctionalityToATags()
    })
    .catch((er) => {
      console.warn(er);
    });

  // ADD ANY NEED NAV EVENT LISTENERS BELOW
};

const addFunctionalityToATags = () => {
  const categoryTags = document.querySelectorAll('.sub-category > li > a');

  const removeClassName = () => {
    categoryTags.forEach(t => t.classList.remove('active'))
  }

  categoryTags.forEach((a_tag) => {
    a_tag.onclick = () => {
      removeClassName();

      a_tag.classList.add('active');

      const window_hash = window.location.hash;

      const tag_hash = '#' + a_tag.href.split('#').pop();
      
      if (window_hash === tag_hash ) {
        a_tag.classList.remove('active');
        const newUrl = a_tag.href.split('#').shift();
        window.location = newUrl;
      }
    };
  });
}

export {
  createNavBar,
};
