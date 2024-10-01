const errorMiddleware = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    // Handle any other errors
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errors: [err.message],
    });
};

export default errorMiddleware;
