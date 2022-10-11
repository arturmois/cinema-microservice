const jwt = require('jsonwebtoken');

async function doLogin(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (email === 'contato@arturmois.com.br'
        && password === '123456') {

        const token = jwt.sign(
            { userId: 1 },
            process.env.SECRET,
            { expiresIn: parseInt(process.env.EXPIRES) });

        res.json({ token });
    }
    else res.sendStatus(401);
}

async function validadeToken(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    token = token.replace('Bearer ', '');

    try {
        const { userId } = jwt.verify(token, process.env.SECRET);
        res.locals.userId = userId;
        next();
    } catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
}

async function doLogout(req, res, next) {
    res.send('Logout!');

}

module.exports = {
    doLogin,
    doLogout,
    validadeToken
}