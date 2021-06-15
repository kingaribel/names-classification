const namesClassify = require('./lib/name-classify')

module.exports = (name) => {
    return namesClassify.getGender(name).then((gender) => {
        return gender
    });
};