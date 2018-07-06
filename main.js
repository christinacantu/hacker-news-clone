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
      articleUpvote.setAttribute('href', '#');
      articleUpvote.setAttribute('class', 'upvote');

      let articlePoints = document.createElement('p');
      articlePoints.innerHTML = '50 Points by';
      articlePoints.setAttribute('class', 'points');


      let articleUser = document.createElement('a');
      articleUser.innerHTML = 'Butterbutt';
      articleUser.setAttribute('href', '#');
      articleUser.setAttribute('class', 'user');

      let articlePostTime = document.createElement('a');
      articlePostTime.innerHTML = '5 hours ago';
      articlePostTime.setAttribute('href', '#');
      articlePostTime.setAttribute('class', 'post-time');

      let articleHide = document.createElement('a');
      articleHide.innerHTML = 'Hide';
      articleHide.setAttribute('href', '#');
      articleHide.setAttribute('class', 'hide');

      let articleComments = document.createElement('a');
      articleComments.innerHTML = '10 comments';
      articleComments.setAttribute('href', '#');
      articleComments.setAttribute('class', 'comments');

      let articleSource = document.createElement('a');
      let url = new URL(article.url);
      articleSource.innerHTML = '(' + url.hostname + ')';
      articleSource.setAttribute('class', 'url');
      articleSource.setAttribute('href', '#');

      let newsItem = document.createElement('li');
      newsItem.innerHTML = '<a href="' + article.url + '">' + article.title + "</a>";
      newsItem.insertBefore(articleUpvote, newsItem.childNodes[0]);
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
