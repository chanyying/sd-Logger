/*! This file is created by shuidihuzhu logger */
!function(o,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:o)[r]=n[r]}}(this,function(){return function(o){function e(r){if(n[r])return n[r].exports;var t=n[r]={exports:{},id:r,loaded:!1};return o[r].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}var n={};return e.m=o,e.c=n,e.p="",e(0)}([function(o,e){"use strict";var n=encodeURIComponent(window.location.href),r=function(){var o=(new Date).getTime()+"-",e=0;return function(){return o+e++}}(),t=function o(e,t){function i(){for(var o=arguments.length,e=Array(o),n=0;n<o;n++)e[n]=arguments[n];var r=Object.assign.apply(Object,[{}].concat(e)),t="";for(var i in r)t+=i+"="+r[i]+"&";return t=t.substring(0,t.length-1),"/?"+t}function a(){l&&f||console.error("请检查业务名称和log服务地址是否为空!"),l&&"/"!==l.charAt(l.length-1)&&(l+="/")}function s(o){var e=window.imgLogData||(window.imgLogData={}),n=new Image,t=r();n.onload=n.onerror=function(){n.onload=n.onerror=null,n=null,delete e[t]},n.src=o+"&_uid="+t}function u(o,e){a();var r=i({t1:f,t2:o||"1",s1:n,s2:d.msg||"-",s3:e.api_time||"-",s4:e.router_time||"-",s5:e.api_url?encodeURIComponent(e.api_url):"-",s6:e.api_code.toString()||"-",s7:e.api_msg||"-",s8:e.api_token||"-"});c(r)}function c(o){s(l+"logs"+o)}if(!o.installed){e.Logger=u,e.prototype.$Logger=u;var f=t.name,l=t.server,d={};console.error=function(o){return function(e){d={msg:e},o.call(console,e)}}(console.error),window.onerror=function(o,e,n,r,t){d={msg:o+" at "+e+":"+n+":"+r}}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(t),o.exports=t}])});