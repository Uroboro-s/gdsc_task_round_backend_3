class AppError extends Error {
    constructor(statusCode, message) {
        super(message);
        console.log(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.status = `${statusCode}`.startsWith("4") ? "Failed" : "Error";
        console.log("2nd heer");
        Error.captureStackTrace(this, this.constructor);
        console.log("3rd heer");
    }
}

module.exports = AppError;