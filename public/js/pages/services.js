$(function () {
  var parsedUrl = getParsedUrl();
  if (parsedUrl.hash === '#PaintRepair') {
    $('img[rel="PaintRepair"]').click();
  }
  if (parsedUrl.hash === '#RimRepair') {
    $('img[rel="RimRepair"]').click();
  }
  if (parsedUrl.hash === '#DentRepair') {
    $('img[rel="DentRepair"]').click();
  }
  if (parsedUrl.hash === '#Detailing') {
    $('img[rel="Detailing"]').click();
  }
});