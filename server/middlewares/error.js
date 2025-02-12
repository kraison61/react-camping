const handleError = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({ message: "Something Wrong!!!" });
  }

  module.exports = handleError