$(function() {
  var about_me = $('#about_me');
  var projects = $('#projects').hide();
  var contact = $('#contact').hide();

  var about_me_link = $('a[href="#about_me"]');
  var projects_link = $('a[href="#projects"]');
  var contact_link = $('a[href="#contact"]');

  function hide_all() {
    about_me.hide();
    projects.hide();
    contact.hide();

    about_me_link.parent().removeClass('selected');
    projects_link.parent().removeClass('selected');
    contact_link.parent().removeClass('selected');
  }

  about_me_link.click(function() {
    hide_all();
    about_me.show();
    about_me_link.parent().addClass('selected');
  });

  projects_link.click(function() {
    hide_all();
    projects.show();
    projects_link.parent().addClass('selected');
  });

  contact_link.click(function() {
    hide_all();
    contact.show();
    contact_link.parent().addClass('selected');
  });

  var hash = window.location.hash;

  if (hash.length > 0) {
    $('a[href="' + hash + '"]').click();
  }
});
