$(window).load(function () {
  setTimeout(function () {
    $('#loader').fadeOut()
  }, 1000);
});

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getParsedUrl(url) {
  if (!url) {
    url = window.location.href;
  }
  var parser = document.createElement('a');
  // parser.href = "http://example.com:3000/pathname/?search=test#hash";
  parser.href = url;

  parser.protocol; // => "http:"
  parser.hostname; // => "example.com"
  parser.port;     // => "3000"
  parser.pathname; // => "/pathname/"
  parser.search;   // => "?search=test"
  parser.hash;     // => "#hash"
  parser.host;     // => "example.com:3000"

  return parser;
}

$(function () {
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $("#hide").click(function () {
    $("p").hide();
  });
  $("#show").click(function () {
    $("p").show();
  });
});