
var userinput=""

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "2d3d38f14f5248d787f0beae9073ce46",
  'q': userinput
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    //$('#search').text(JSON.stringify(response))
  console.log(result);
}).fail(function(err) {
  throw err;
});

$("#search").on("click", function(event) {
    event.preventDefault();

    var userinput = $("#searchterm").val();
    console.log(userinput);
})


