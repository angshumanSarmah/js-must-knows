function* generator() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    yield 3;
}

const generator1 = generator();
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
