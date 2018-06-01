$(function () {
  var selector = '.style-heading li';

  $(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
  });
});