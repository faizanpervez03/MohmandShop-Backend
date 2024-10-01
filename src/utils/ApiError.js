class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [],
        stack= ""
    ) {
        // dlta mung da bara override ka 
        super(message)
        this.statusCode = statusCode
        this.data = {}
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack

        }else{
            Error.captureStackTrace(this, this.constructor)
        }


    }
}

export { ApiError }