// ==UserScript==
// @name        shortsnews redirect
// @namespace   rulfy
// @description Redirecting shortnews.de links to the target site.
// @include     http://shortnews.de/beamto/*
// @include     http://www.shortnews.de/beamto/*
// @version     1
// @grant       none
// @run-at document-end
// ==/UserScript==
var url = $('#source-iframe').attr("src");
window.location = url;
//var url = $('#source-url').html();
//window.location = url.substring(5);