let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=d4b73d66a23247eba862493446f902a7";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let results = data.articles;
    let newsList = document.createElement('ol');
    let container = document.querySelector('.container');
    container.appendChild(newsList);
    results.map(article => {

      let articlePoints = document.createElement('a');
      articlePoints.innerHTML = '<a href="#">50 Points by</a>';

      // let articlePoints = document.createElement('button');
      // articlePoints.innerHTML = '<a href="#">50 Points</a>';






      let articleSource = document.createElement('a');
      let url = new URL(article.url);
      // console.log(article.url);
      // console.log(hostname);
      articleSource.innerHTML = ' (' + url.hostname + ')';  //need to fix link
      // console.log(url.hostname);

      let newsItem = document.createElement('li');
      newsItem.innerHTML = '<a href="' + article.url + '">' + article.title + "</a>";
      newsItem.appendChild(articleSource);
      newsItem.appendChild(articlePoints);
      newsList.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.log(`An error occurred: ${error}`);
  });
