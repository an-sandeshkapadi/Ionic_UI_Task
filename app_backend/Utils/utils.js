


exports.responseHandler = (res, status, message, data = null) => {
    res.status(status).json({ message, data });
  };
  
  exports.errorHandler = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ message, error });
  };
  