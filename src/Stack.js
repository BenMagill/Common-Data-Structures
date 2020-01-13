class Stack {
    constructor(length) {
        this.pointer = -1 // This is the postition of the last item inserted. Since none have its 1 below the smallest location (0)
        this.stack = Array(length).fill(null) // Initalise an array with the length defined
        this.maxLength = length - 1 // The length - 1 is the position of the last item. This is very useful to knowssssss
    }
    pop(){

    }

    push(){

    }

    print(){

    }

    _(...args){ // ...args puts all parameters into a single variable
        var type;
        var values;
        if (typeof args[0] === "number" && args.length === 1){ // If input as _(1)
            type = "single"
            values = args[0]
        } else if (args[0] === "number" && args.length !== 1) { // If input as _(1, 2, 3, 4)
            type = "multi"
            values = args
        } else if (args[0].constructor === Array) { // If input as _([1, 2, 3, 4])
            type = "multi"
            values = args[0]
        }

        if (type === "multi") {
            return values.forEach(item => {
                return this.stack[item]
            });
        } else {
            return this.stack[values]
        }
    }
}

a = new Stack(5)

console.log(a._(1))

exports.default = Stack
