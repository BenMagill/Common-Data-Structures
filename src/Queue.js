class Queue {
    constructor(size) {
        this.pointerStart = 0 // Location of first item. Always 0 unless items popped
        this.pointerEnd = 0 // Location of the last item to be added
        this.queue =  Array(size).fill(null) // Create an array with the decided length
    }

    pop(){ // Remove the first item from the queue
        if (this.hasItems()) { // Since you can only remove items if there is item
            const temp = this.queue[this.pointerStart] // Get the item before removed to return later
            this.queue[this.pointerStart] = null // Overwrite item
            this.pointerStart += 1 // Move the start pointer up one as first item removed 
            return temp // Return the item removed
        }
    }

    push(value){ // Add an item to end of queue
        if (this.queue.length !== this.pointerEnd) { // Can only add items if not full
            this.queue[this.pointerEnd] = value // Add the value on to the end location
            this.pointerEnd += 1 // Move the end pointer up one
        }
    }

    hasItems(){
        if (this.pointerStart !== this.pointerEnd) { //If end and start pointers equal then no items
            return true
        }
        return false
    }

    get(){
        return this.queue
    }

    print(){
        console.log(this.queue)
    }

    accessFirst(){
        return this.queue[this.pointerStart] // Return first item but dont remove
    }
}

exports.default = Queue