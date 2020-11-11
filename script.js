let jsonData;
let sort = 'newest';

fetch('content.json')
  .then(response => response.json())
  .then(json => loadContent(json));


function loadContent (json) {
  jsonData = json;
  let html = "";
  if (sort == 'newest') {
    for (let i = 0; i < json.entry.length; i++) {
      html += addArticle(json, i);
    }
  } else {
    for (let i = (json.entry.length-1); i >= 0; i--) {
      html += addArticle(json, i);
    }
  }
  document.getElementById('content-container').innerHTML = html;
}

function addArticle (json, i) {
  let image = json.entry[i].image;
  let title = json.entry[i].title;
  let date = json.entry[i].date;
  let body = json.entry[i].content;
  return(`<article class="post" id=><header><div class="img-box"><img src="${image}" alt="image" class="post-img img-round"></div><h2 class="title">${title}</h2><div class="date">${date}</div></header><p class="body">${body}</p><hr></article>`)
}

function sortArticles () {
  if (sort == 'newest') {
    sort = 'oldest';
    document.getElementById('sort-button').style.backgroundImage="url(img/sortOldestFirst.png)";
  } else {
    sort = 'newest';
    document.getElementById('sort-button').style.backgroundImage="url(img/sortNewestFirst.png)";
  }
  loadContent(jsonData);
}
