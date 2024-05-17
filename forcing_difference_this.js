const func = function() {
    console.log(this.name);
}.bind({name: 'Hello'});


const a = {
    name: 'A'
};

func.call(a)
