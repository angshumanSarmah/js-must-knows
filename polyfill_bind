Function.prototype.myBind = function(scope, ...args) {
    const obj = this;
    const params = args;
    console.log(args)
    return function() {
        obj.apply(scope, params);
    }
}


const NameObject = {
    firstName: 'Angshuman', 
    lastName: "Sarmah"
}

let printName = function(place) {
    console.log(this.firstName+ ' '+ this.lastName + ' from ' + place);
}

const getFullName = printName.myBind(NameObject, 'India');
getFullName();
