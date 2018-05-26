function searchArticles() {

  event.preventDefault();
  
  var userinput = $("#searchterm").val();

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "2d3d38f14f5248d787f0beae9073ce46",
    'q': userinput
  });

  console.log(url);

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    var response = result.response.docs;
    var articleSpace = $("#articleSpace");

    for ( var i = 0; i < response.length; i++) {

      var articleDiv = $("<div class='article'>");

      var headline = $("<h2>").text((i + 1) + " " + response[i].headline.main);
      var byLine = $("<p>").text(response[i].byline.original);
      var pubDate =  $("<p>").text(response[i].pub_date);
      var webURL = $("<a>").text(response[i].web_url).attr("href", response[i].web_url).attr("target", "_blank");

      articleDiv.append(headline, byLine, pubDate, webURL);

      articleSpace.append(articleDiv);

    }

  }).fail(function(err) {
    throw err;
  });
}

$("#search").on("click", searchArticles);
