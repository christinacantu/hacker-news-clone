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

      let articleUpvote = document.createElement('button');
      articleUpvote.innerHTML = ' <a href="#"></a>';

      let articlePoints = document.createElement('a');
      articlePoints.innerHTML = ' <a href="#">50 Points by</a>';

      let articleUser = document.createElement('a');
      articleUser.innerHTML = ' <a href="#">Butterbutt</a>';

      let articlePostTime = document.createElement('a');
      articlePostTime.innerHTML = ' <a href="#">5 hours ago</a>';

      let articleHide = document.createElement('a');
      articleHide.innerHTML = ' <a href="#">Hide</a>';

      let articleComments = document.createElement('a');
      articleComments.innerHTML = ' <a href="#">10 comments</a>';

      let articleSource = document.createElement('a');
      let url = new URL(article.url);
      articleSource.innerHTML = ' (<a href="#">' + url.hostname + '</a>)';

      let newsItem = document.createElement('li');
      newsItem.innerHTML = '<a href="' + article.url + '">' + article.title + "</a>";
      newsItem.appendChild(articleSource);


      let bottom = document.createElement('div');
      bottom.setAttribute('class', 'bottom');
      bottom.appendChild(articlePoints);
      bottom.appendChild(articleUser);
      bottom.appendChild(articlePostTime);
      bottom.appendChild(articleHide);
      bottom.appendChild(articleComments);
      newsItem.appendChild(bottom);
      
      newsList.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.log(`An error occurred: ${error}`);
  });
