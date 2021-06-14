const sqlite3 = require("sqlite3").verbose();

const sqliteExecutor = (callback = null) => {
    const db = new sqlite3.Database(`./db/names_classification.sqlite`);
    if (callback) {
      callback(db);
    }
    db.close();
  }

module.exports = { sqliteExecutor };