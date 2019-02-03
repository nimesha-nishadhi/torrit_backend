const mysql = require("mysql");
const conDetails = require("../config/database");
const tableSchema = require("./tableSchema");
const bcrypt = require("bcryptjs");
var randomstring = require("randomstring");

// create database connection
const con = mysql.createConnection(conDetails.conDetails);

// connect to database
module.exports.connet = function() {
  con.connect(function(err) {
    if (err) {
      throw err;
    } else {
      console.log("connected");
    }
  });

  for (let index = 0; index < tableSchema.tablesname.length; index++) {
    const tableName = tableSchema.tablesname[index];
    // check the availability of the tables
    con.query("CHECK TABLE " + tableName, function(err, result) {
      if (err) {
        throw err;
      }

      //DEBUG codes
      //console.log(tableName);
      //console.log(result[0].Msg_text);
      //console.log("Table 'webdata1.users' doesn't exist");
      //console.log("Table 'webdata1."+tableName+"'"+" doesn't exist");
      //Table 'webdata1.users' doesn't exist

      if (
        result[0].Msg_text ==
        "Table '" +
          conDetails.conDetails.database +
          "." +
          tableName +
          "' doesn't exist"
      ) {
        // if =table not availble then create the tables
        createTables(tableSchema.tables[tableName].createTable);
      }
    });
  }
};

// function for create tables that not exits in database
function createTables(sql) {
  con.query(sql, function(err, result) {
    if (err) {
      //throw err;
      console.log("tableExist");
    } else {
      console.log(result);
    }
  });
}

// fuction for add users in to user table
// module.exports.addNewUser = function InsertUser(user, callback) {
//   //console.log(user, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user[4], salt, function(err, hash) {
//       if (err) {
//         throw err;
//       }
//       user[4] = hash;
//       console.log(user, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
//       con.query(
//         tableSchema.tables.Administer.addAdminister,
//         [[user]],
//         callback
//       );
//     });
//   });
// };

module.exports.addUsers = function(data, callback) {
  console.log(data, "qwertyuiertyuiop");

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(data[4], salt, function(err, hash) {
      if (err) {
        throw err;
      }
      data[4] = hash;
      con.query(
        tableSchema.tables.Administer.addAdminister,
        [[data]],
        callback
      );
    });
  });
};

module.exports.selectAdmin = function(data, callback) {
  console.log(data, "ddfgdfgdf");
};
