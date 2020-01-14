class Stack {
    constructor(length) {
        this.pointer = -1 // This is the postition of the last item inserted. Since none have its 1 below the smallest location (0)
        this.stack = Array(length).fill(null) // Initalise an array with the length defined
        this.maxLength = length - 1 // The length - 1 is the position of the last item. This is very useful to knowssssss
    }
    pop(){
        if (this.pointer !== -1){ // Check if there is any items to remove
            this.stack[this.pointer] = null // Remove top item
            this.pointer -= 1 // Decrease pointer by one to remember this change
        }
    }

    push(value){
        if (this.maxLength !== this.pointer) { // Check if array not full
            this.pointer += 1 // Increase pointer by one as this will be where the final item is 
            this.stack[this.pointer] = value // Put the value in the array at this location
        }
    }

    print(){ // Prints the array
        console.log(this.stack)
    }

    get(){ // Returns the array
        return this.stack
    }

    _(...args){ // ...args puts all parameters into a single variable
        var type; // Stores if accessing multiple or a single item
        var values; // Stores the locations to access
        if (typeof args[0] === "number" && args.length === 1){ // If input as _(1)
            type = "single"
            values = args[0]
        } else if (typeof args[0] === "number" && args.length !== 1) { // If input as _(1, 2, 3, 4)
            type = "multi"
            values = args
        } else if (args[0].constructor === Array) { // If input as _([1, 2, 3, 4])
            type = "multi"
            values = args[0]
        }

        // If multiple locations provided
        if (type === "multi") {
            // Get all items and return in same order in an array
            return values.map(item => {
                return this.stack[item]
            })
        } else { // If single location provided
            return this.stack[values]
        }
    }
}

exports.default = Stack
