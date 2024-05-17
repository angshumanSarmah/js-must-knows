const data = [];
function deBounce(cb, delay) {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=> {
            cb();
        }, delay)
    }
}

function getData() {
    console.log('Hi')
}

const deBouncedFunc = deBounce(getData, 20);
deBouncedFunc();
deBouncedFunc();
deBouncedFunc();
deBouncedFunc();
