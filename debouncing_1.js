let timer;
function debounce(cb) {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(()=> {
        cb();
    }, 20)
}

function getData() {
    console.log("Hey");
}

debounce(getData);
debounce(getData);
debounce(getData);
