'use strict';

function fibonacci_series(n) {
	var arr=[];
	var a;
	function exchange(i,j){
		arr.push(i);
		a=j;
		j=i+j;
		i=a;
		if(arr.length<n+1){
			exchange(i,j);
		}else{
			return arr;
		}
	}
	exchange(0,1);
	return arr;
}

module.exports = fibonacci_series;
