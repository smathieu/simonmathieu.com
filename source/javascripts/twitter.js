$(function() {
  function sleep(milliSeconds){
    var startTime = new Date().getTime(); // get the current time
    while (new Date().getTime() < startTime + milliSeconds); // hog cpu
  }
 
  var user_name = 'smathieu';
  var url = 'http://api.twitter.com/1/statuses/user_timeline.json'; 
  var number_of_tweets = 1;

  args = {
    count: number_of_tweets,
    screen_name: user_name,
  };
  $.get(url, args, function(tweets){ 
    var $ul = $('#tweet_list');
    $ul.find('li').remove();
    for (var i = 0; i < number_of_tweets; i++) {
      var tweet = tweets[i];
      if (tweet) {
        $li = $('<li>' + tweet.text + '</li>').linkify()
        $ul.hide().append($li).fadeIn()
      }
    }
  }, 'jsonp');
});
