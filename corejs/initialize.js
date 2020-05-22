var output = function output(){
	"use strict";
	
	console.log('Now ready');
	
	let sum = (a,b) => a+b;
	
	let result = sum(25,50);
	console.log(result);
	
	let el = document.getElementById('output');
	el.textContent = 'result is: ' + result;
	
};

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(output);

