$(function() {
  var user_name = 'smathieu';
  var url = 'http://api.twitter.com/1/statuses/user_timeline.json'; 
  var number_of_tweets = 3;

  args = {
    count: number_of_tweets,
    screen_name: user_name,
  };
  $.get(url, args, function(tweets){ 
    var $ul = $('#tweet_list');
    for (var i = 0; i < number_of_tweets; i++) {
      var tweet = tweets[i];
      if (tweet) {
        $li = $('<li>' + tweet.text + '</li>').linkify()
        $ul.append($li)
      }
    }
  }, 'jsonp');
});
