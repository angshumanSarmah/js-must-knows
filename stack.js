class Stack {
    // Stack follows L.I.F.O.
    constructor(size) {
        this.stack = new Array(size);
        this.size = size;
        this.topOfStack = 0;
    }

    push(element) {
        if (this.size === this.topOfStack) {
            console.log('Stack Full: Remove some element first');
            return;
        }
        this.stack[this.topOfStack] = element;
        this.topOfStack = this.topOfStack + 1;
        console.log(this.stack);
    }

    pop() {
        if (this.topOfStack === 0) {
            console.log('Stack Empty: nothing to be removed');
            return;
        }
        console.log("Element removed: ", this.stack[this.topOfStack-1]);
        this.topOfStack--;
        this.stack.length -=1;
        console.log(this.topOfStack, this.stack);
    }
}

const stack = new Stack(3);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40); // this would be rejected as it crosses the specified stack size

stack.pop();
stack.pop();
stack.pop();
stack.pop();
