class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.ref = null;
    }

    toArray() {
        let tref = this.ref;
        let nodes = [];
        while (tref != null) {
            nodes.push(tref.data);
            tref = tref.next;
        }
        return nodes;
    }

    push(data) {
        let item = new Item(data);
        if (this.ref === null) {
            this.ref = item;
        } else {
            let tref = this.ref;
            while (tref.next != null) {
                tref = tref.next;
            }
            tref.next = item;
        }
    }

    whileEach(func) {
        let tref = this.ref;
        while (tref != null) {
            func(tref.data);
            tref = tref.next;
        }
    }
}

module.exports = Array;