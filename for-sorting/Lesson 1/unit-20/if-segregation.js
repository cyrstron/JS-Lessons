class AbsractShape {
    get area() {}
    get volume() {}
}

class Cube extends AbsractShape {
    constructor(size) {
        this.size = size;
    }

    get area() {
        return this.size * this.size * 6;
    }

    get volume() {
        return this.size * this.size * this.size;
    }
}

class Square extends AbsractShape {
    constructor(size) {
        this.size = size;
    }

    get area() {
        return this.size * this.size;
    }

    get volume() {
        /* ??? */
    }
}

class AbsractSolidShape {
    get area() {}
    get volume() {}
}

class Cube extends AbsractSolidShape {
    constructor(size) {
        this.size = size;
    }

    get area() {
        return this.size * this.size * 6;
    }

    get volume() {
        return this.size * this.size * this.size;
    }
}

class AbsractPlainShape {
    get area() {}
}

class Square extends AbsractPlainShape {
    constructor(size) {
        this.size = size;
    }

    get area() {
        return this.size * this.size;
    }
}
