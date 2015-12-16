// ==UserScript==
// @name        AZ Paywall-Block
// @namespace   rulfy
// @description Clearing your cookies so that you won't see the paywall.
// @include     http://augsburger-allgemeine.de/*
// @include     http://www.augsburger-allgemeine.de/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version     2
// @grant       none
// @run-at      document-end
// ==/UserScript==
function createCookie(name) {
	var date = new Date();
	date.setTime(date.getTime() + ( -1 * 24 * 60 * 60 * 1000));
	var expires = '; expires=' + date.toGMTString();
	document.cookie = name + '=' + expires + '; path=/';
}

var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++)
	createCookie(cookies[i]);

// remove cookie info
var info = $('#cookie_info');
if( info.length > 0 )
    info.remove();
