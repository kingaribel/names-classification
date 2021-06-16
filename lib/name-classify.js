const sqlite3 = require("sqlite3").verbose();
const { open } = require('sqlite')
const path = require('path')
const dbPath = path.resolve(__dirname, 'db', 'names_classification.sqlite')
var accents = require('remove-accents');

var names = [];

names.getGender = async (name) => {
    name = name.toUpperCase();
    if (!name || !name.trim()) {
        throw new Error("Name is not defined");
    }
    name = accents.remove(name);
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    });
    const findStatement = "SELECT first_name, gender FROM names_genders WHERE first_name = ?";
    const result = await db.get(findStatement, [name]);
    db.close();

    return result ? result.gender : null;
};

module.exports = names;