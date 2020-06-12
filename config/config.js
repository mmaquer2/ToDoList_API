const Sequelize = require('sequelize');

    //sequelize arguements database name/ owner/password
    //tablename == workoutdata in pgadmin 4 in the workoutlogdata database
    //insert password into 'pass' into the 3rd argument of the list

module.exports =  new Sequelize('todoDB', 'postgres', '/////', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  timestamps: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

//table name is workOutStats