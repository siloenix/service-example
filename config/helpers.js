function parseNumber(str) {
    if (!str) {
        return;
    }
    return parseInt(str);
}

module.exports = {
    parseNumber,
}
