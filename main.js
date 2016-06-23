var vals = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity,
  -Infinity, 1, {}, [], [12], ['something'], function(){}];

var num = vals.map(function(x){return Number(x);});
var str = vals.map(function(x){return String(x);});
var bol = vals.map(function(x){return Boolean(x);});

var numPush = function() {
  for(var i = 0; i < num.length; i++) {
	document.querySelector('#num'+(i+1)).textContent = num[i];
  }
};
var strPush = function() {
  for(var i = 0; i < str.length; i++) {
	document.querySelector('#str'+(i+1)).textContent = str[i];
  }
};
var bolPush = function() {
  for(var i = 0; i < bol.length; i++) {
	document.querySelector('#bol'+(i+1)).textContent = bol[i];
  }
};
numPush();
strPush();
bolPush();
