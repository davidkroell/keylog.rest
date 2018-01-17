var path = require("path");

module.exports = {
    payload: {
        ip: "my ip",
        port: "5000"
    },
    db: {
        database: "",
        username: "",
        password: "",
        dialect: "sqlite",
        sqliteFile: path.join(__dirname, "db.sqlite")
    },
    api: {
        keys: [
            '17ec91978bd039748853572fa78b5ab2f373a77e8aba4beffefee56f',
            '08dcb5816dd46140728406db3066a453a1e84c1ff2b6aa6d19c6e653'
        ]
    }
}