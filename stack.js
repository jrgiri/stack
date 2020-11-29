class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(element){
        this.size++;
        this.storage[this.size] = element;
    }

    pop(){
        delete this.storage[this.size];
        this.size--;
    }

    print(){
        console.log(stack)
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

stack.pop();
stack.print();