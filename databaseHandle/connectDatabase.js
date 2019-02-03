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

  // for (let index = 0; index < tableSchema.tablesname.length; index++) {
  //   const tableName = tableSchema.tablesname[index];
  //   // check the availability of the tables
  //   con.query("CHECK TABLE " + tableName, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     //DEBUG codes
  //     //console.log(tableName);
  //     //console.log(result[0].Msg_text);
  //     //console.log("Table 'webdata1.users' doesn't exist");
  //     //console.log("Table 'webdata1."+tableName+"'"+" doesn't exist");
  //     //Table 'webdata1.users' doesn't exist

  //     if (
  //       result[0].Msg_text ==
  //       "Table '" +
  //         conDetails.conDetails.database +
  //         "." +
  //         tableName +
  //         "' doesn't exist"
  //     ) {
  //       // if =table not availble then create the tables
  //       createTables(tableSchema.tables[tableName].createTable);
  //     }
  //   });
  // }
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
  con.query(
    tableSchema.tables.Administer.selectAdminister + mysql.escape(data),
    callback
  );
};

module.exports.comparePassword = function(password, hash, callback) {
  bcrypt.compare(password, hash, function(err, isMatch) {
    if (err) {
      console.log(err);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports.addCustomers = function(data, callback) {
  console.log(data, "qwertyuiertyuiop");

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(data[4], salt, function(err, hash) {
      if (err) {
        throw err;
      }
      data[4] = hash;
      con.query(tableSchema.tables.Customer.addCustomer, [[data]], callback);
    });
  });
};

module.exports.selectUser = function(data, callback) {
  console.log(data, "ddfgdfgdf");
  con.query(
    tableSchema.tables.Customer.SelectUser + mysql.escape(data),
    callback
  );
};

module.exports.addCategory = function(data, callback) {
  console.log(data, "wqwqwqwqwqw");
  con.query(tableSchema.tables.Categary.addCategory, [[data]], callback);
};

module.exports.selectCategory = function(data, callback) {
  console.log(data, "wqwqwqwqwqw");
  con.query(
    tableSchema.tables.Categary.selectCategory + mysql.escape(data),
    callback
  );
};
