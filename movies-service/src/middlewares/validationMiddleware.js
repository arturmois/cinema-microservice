const schema = require('../schemas/moviesSchema');

function validateMovie(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
        const { details } = error;
        return res.status(422).json(details.map(d => d.message));
    }

    next();
}

module.exports = {
    validateMovie
}