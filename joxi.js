// ==UserScript==
// @name        Joxi
// @namespace   rulfy
// @description improving joxi free
// @include     http://joxi.ru/*
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==
var directUrl = $('meta[property="og:image"]').attr('content')
$('#input11').val(directUrl);

/*var tempHtml = $('<div/>').html($('#input12').val());
alert(tempHtml.val());
tempHtml.find('a').attr('href',directUrl);

alert(tempHtml.val());

$('#input12').val(tempHtml.val());*/