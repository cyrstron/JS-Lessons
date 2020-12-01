class HttpError extends Error {
    constructor(message, status) {
        super(message);

        this.status = status;
    }
}

const error = new HttpError('Not Found', 404);

console.log(error.status); // 404
console.log(error.stack); // *stack details*
