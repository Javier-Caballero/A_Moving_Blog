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
    html += `<div class="post"><div class="img-box"><img src="${image}" alt="image"></div><div class="title">${title}</div><div class="date">${date}</div><div class="body">${body}</div></div><hr>`;
  }
  document.getElementById('content-container').innerHTML = html;
}
