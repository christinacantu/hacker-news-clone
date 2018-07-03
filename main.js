let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=d4b73d66a23247eba862493446f902a7";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let results = data.results;
    let newsList = document.createElement('ol');
    let body = document.querySelector('body');
    body.appendChild(newsList);
    results.map(article => {
      let newsItem = document.createElement('li');
      newsItem.innerHTML = '<a href="' + article.href + '">' + article.title + "</a>";
      newsList.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.log(`An error occurred: ${error}`);
  });
