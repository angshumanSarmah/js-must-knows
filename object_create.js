const Person2 = {
    getName: function() {
        return this.first+" "+this.last;
    }
}

const angshu = Object.create(Person,
                    {
                        first: {value: 'Angshu'},
                        last: {value: 'Babu'}
                    }
                );

console.log(angshu.getName())
