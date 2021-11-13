const jwt = require(`jsonwebtoken`)

const SECRET_KEY = `Zzwm1H+xAys6+IWhXgQpHg4fb78SoyV+ZrQLt4KdfO9/oEpfMgNjZE6i1GCMk308CECwjiwG97mc/yCf/18F8J/RY6IfYt4XGJVKpcUAjncyYoor3L2KB3KbDK4Ac711i1EB1MK9ZEEwmlY/x4Fsb1asGKw4ZO0Fzqkp8OA9+kxfq59A4gk+ZNSOO8Bg4fqoumt2kXwkxeozZzmivoHm3OmRNJmRgQmjyfE6wP5z1QREBqQeR1H0eU8C6dGOdHKw/dFNosFNOY/MRzADmj3ALGxo`

const createToken = (username, usertype) => {
    return jwt.sign({ username, usertype }, SECRET_KEY)
}

// const createToken = (id, fullname, usertype) => {
//     return jwt.sign({ id, fullname, usertype }, SECRET_KEY)
// }

const verifyToken = (token) => {
    new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        })
    })
}

module.exports = { createToken, verifyToken }