const Sequelize = require('sequelize');
const db = require('../config/config');

//workOutStats is the table name in the database//
//tablename goes into the argument after define//
const List = db.define('todoTable', {
  todoItem: {
    type: Sequelize.STRING
  }
});

module.exports = List;
