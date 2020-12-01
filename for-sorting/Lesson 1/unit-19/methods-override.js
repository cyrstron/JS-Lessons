class Worker {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} works.`);
    }
}

const worker = new Worker('Vasya');
worker.work(); // Vasya works.

class HardWorker extends Worker {
    work() {
        console.log(`${this.name} works hard!`);
    }
}

const hardWorker = new HardWorker('Vanya'); 
hardWorker.work() // Vanya works hard!

class TripleWorker extends Worker {
    work() {
        for (let i = 0; i < 3; i++) {
            super.work();
        }
    }
}

const tripleWorker = new TripleWorker('Kim Jong Un');
hardWorker.work() // Kim Jong Un works. Kim Jong Un works. Kim Jong Un works.
