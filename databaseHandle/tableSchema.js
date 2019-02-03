const tables = {
  Administer: {
    addAdminister:
      "INSERT INTO Adminstrator(FirstName,LastName,Email,MobileNo,Pass_word) VALUE ?",
    selectAdminister: "SELECT * FROM Adminstrator WHERE Email = "
  },

  Customer: {
    addCustomer:
      "INSERT INTO Custemor(FirstName,LastName,Email,MobileNo,Pass_word,Add_ress) VALUE ?",
    getUser: "SELECT * FROM Custemor where ?",
    SelectUser: "SELECT * from Custemor WHERE email = ",
    deleteUser: "DELETE FROM Custemor WHERE email = "
  },

  Categary: {
    addCategory: "INSERT INTO Categary(Categary_Name) VALUE ?",
    selectCategory: "SELECT * FROM Categary WHERE Categary_Name = "
  }
};

module.exports.tables = tables;

module.exports.tablesname = ["users", "Customer", " Categary"];
