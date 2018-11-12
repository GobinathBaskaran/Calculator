module.exports = (req, res, next) => {
    if (Object.values(req.query).length) {
        return res.badRequest('Invalid Request');
    }
    next();
}

