function handle(err, req, res, next) {
    console.error(`Error handling request: ${req.method} ${req.originalUrl}`);
    console.error(err);
    res.status(500);
    res.send({
        message: err.toString()
    });
}

module.exports = {
    handle,
}
