$(function() { 
  $('#blog').hide();
  var args = {num: 1};
  $.getJSON("http://blog.simonmathieu.com/api/read/json?callback=?", args, function(data) { 
    $.each(data.posts, function(i,posts){ 
      var id = this.id; 
      var type = this.type; 
      var date = this.date; 
      var url = this.url; 
      var title = this['regular-title'];

      var el = $('#new_blog_tile');
      el.html('<a href="' + url + '">' + title + '</a>');
      $('#blog').fadeIn();
    }); 
  }); 
});
