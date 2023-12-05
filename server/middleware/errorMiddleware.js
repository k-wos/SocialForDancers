const errorMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: 404,
        success: "Failed",
        message: err,
    };

    if (err?.name === "ValidationError") {
        defaultError.statusCode = 404;

        defaultError.message = Object.values(err.errors).map(
            (val) => val.message
        );
    }
    if (err.code && err.code === 11000) {
        defaultError.statusCode = 404;
        defaultError.message = "Email already exist";
    }
    res.status(defaultError.statusCode).json({
        success: defaultError.success,
        message: defaultError.message,
    });
};

export default errorMiddleware;
