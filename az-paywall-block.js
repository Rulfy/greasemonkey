// ==UserScript==
// @name        AZ Paywall-Block
// @namespace   rulfy
// @description Clearing your cookies so that you won't see the paywall.
// @include     http://augsburger-allgemeine.de/*
// @include     http://www.augsburger-allgemeine.de/*
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==
function createCookie(name) {
    var date = new Date();
    date.setTime(date.getTime()+(-1*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = name+"="+expires+"; path=/";
}


var cookies = document.cookie.split(";");
for (var i = 0; i < cookies.length; i++)
      createCookie(cookies[i]);