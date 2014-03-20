// ==UserScript==
// @name        adfly redirect
// @namespace   rulfy
// @description Redirecting adfly directly to the target site.
// @include     http://adf.ly/*
// @version     1
// @grant       none
// @run-at document-end
// @downloadURL https://github.com/Rulfy/greasemonkey/blob/master/adfly.-redirect.js
// @updateURL https://github.com/Rulfy/greasemonkey/blob/master/adfly.-redirect.js
// ==/UserScript==
var url = document.URL;

//http://adf.ly/ad/locked?user_id=XXXXXXX&url=
if( url.startsWith("http://adf.ly/ad/"))
{
    var n = url.indexOf("&url=");
    if( n != -1 )
    {
        url = url.substring(n+5);
        window.location = decodeURIComponent(url);
    }
}
else
{
    // http://adf.ly/XXXXXXX/LINK
    var n = url.indexOf("/",14);
    if( n != -1 )
    {
        window.location = "http://" + url.substring(n+1);
    }
}