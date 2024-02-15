const CONFIG = {
    mode: process.env.NODE_ENV,
    port: (process.env.NODE_ENV === "production") ? 80 : 3000,
    db_structs: {}
}
module.exports = CONFIG;