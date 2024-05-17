const name = {
    firstName: 'Angshuman',
    lastName: "Sarmah"
}

let printName = function(place) {
    console.log(this.firstName+ ' '+ this.lastName + ' from ' + place);
}

Function.prototype.myCall = function(scope, ...args) {
    scope._this = this;
    const params = args.splice(1);
    console.log(this)
    console.log(args)
    return scope._this(args)
}

printName.myCall(name, 'India');
