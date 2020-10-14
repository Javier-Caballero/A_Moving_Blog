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
    let content = json.entry[i].content;
    html += `<div class="post"><img src="${image}" class="post-img" alt="image" width="600" height="400"><div class="title">${title}</div><div class="date">${date}</div><div class="body">${content}</div></div>`;
  }
  document.getElementById('content-container').innerHTML = html;
}