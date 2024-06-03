function expensiveMethod() {
	console.log('Some very heavy operation!');
}

function throttleFunction(cb, delay) {
	let operationPerformed = true;
  return function() {
  	if (operationPerformed) {
    	cb();
      operationPerformed = false;
      setTimeout(()=>{
      	operationPerformed = true;
      }, delay)
    }
  }
}

const callThrottle = throttleFunction(expensiveMethod, 1000);
/* Even though its called 4 times, 
   the method `mainClickHandler` will be called only once 
*/
callThrottle();
callThrottle();
callThrottle();
callThrottle();
