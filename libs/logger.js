// Setup
const winston = require("winston");
const config = require("../config");
const path = require("path");

// Date
const date = new Date();
const date_str = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

// Default/Main Logger
const server_logger = winston.createLogger({
    level: (config.mode === "production") ? "info" : "debug",
    format: winston.format.json(),
    defaultMeta: {},
    transports: [
        new winston.transports.File({ filename: path.join(__dirname, `../logs/${date_str}_error.log`), level: 'error' }),
        new winston.transports.File({ filename: path.join(__dirname, `../logs/${date_str}_all.log`) }),
    ],
});
if (config.mode !== "production") {
    server_logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }));
};

module.exports = server_logger;
exports.server_logger = server_logger;