const db = require("./src/database/models");

db.Applicants.findAll({raw:true})
  .then((result) => console.log(result))