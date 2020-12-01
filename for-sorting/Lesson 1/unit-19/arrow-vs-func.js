class Worker {
    work() {
        console.log('Working...');
    }
}

class DelayedWorker extends Worker {
    work1() {
        setTimeout(() => super.work(), 1000);
    }

    work2() {
        setTimeout(function () {
            super.work();
        }, 1000);
    }
}

const delayedWorker = new DelayedWorker();

delayedWorker.work1(); // Working...
delayedWorker.work2(); // Error!
