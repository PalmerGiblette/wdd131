document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.book-list');


  articles.forEach(article => {
    const articleWrapper = document.createElement('div');
    articleWrapper.classList.add('content-container');

    //Book Meta, this is on the left side
    const meta = document.createElement('aside');
    meta.className = 'book-meta';
    meta.innerHTML = `
        <p class="date">${article.date}</p>
        <p class="age-range">${article.ages}</p>
        <p class="genre">${article.genre}</p>
        <p class="rating">${article.stars}</p>
      `;

    //Book info, this covers the center column
    const main = document.createElement('section');
    main.className = 'book-main';
    main.innerHTML = `
        <h2 class="book-title">${article.title}</h2>
        <div class="book-cover">
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
        </div>
        <p class="book-summary">${article.description}</p>
      `;


    //This appends columns to the wrapper
    articleWrapper.appendChild(meta);
    articleWrapper.appendChild(main);

    //Covers the main container, as the layout
    container.appendChild(articleWrapper);
  });
});