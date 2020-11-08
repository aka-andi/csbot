const config = require('.././config.json');

const create = () => {
    return TOKEN = process.env.TEST_BOT_TOKEN = config.token;
};

module.exports = () => {
    create();
};