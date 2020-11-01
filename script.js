let json;

fetch("content.json")
  .then(response => response.json())
  .then(json => loadContent(json));

function loadContent (json) {
//  console.log(json);
  
  let html = ""
  for (let i = 0; i < json.entry.length; i++) {
    let image = json.entry[i].image;
    let title = json.entry[i].title;
    let date = json.entry[i].date;
    let body = json.entry[i].content;
    html += `<article class="post"><header><div class="img-box"><img src="${image}" alt="image" class="post-img"></div><h2 class="title">${title}</h2><div class="date">${date}</div></header><p class="body">${body}</p><hr></article>`;
  }
  document.getElementById('content-container').innerHTML = html;
}
