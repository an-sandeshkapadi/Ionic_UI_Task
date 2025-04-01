export const responseHandler = (res, status, message, data = null) => {
    res.status(status).json({ message, data });
};
export const errorHandler = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ message, error: error.message });
};
//# sourceMappingURL=utils.js.map