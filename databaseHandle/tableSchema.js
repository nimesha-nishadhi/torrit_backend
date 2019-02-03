const tables = {
  role: {
    createTable:
      "CREATE TABLE role(" +
      "roleId varchar(10)," +
      "roleName	varchar(20)," +
      "CONSTRAINT pk_role PRIMARY KEY (roleId))",
    adduser: "INSERT INTO role (roleId,roleName) VALUE ?",
    getUser: "SELECT roleId FROM role where roleId = "
  },

  Administer: {
    addAdminister:
      "INSERT INTO Adminstrator(FirstName,LastName,Email,MobileNo,Pass_word) VALUE ?",
    selectAdminister: "SELECT * FROM Adminstrator WHERE Email = ?"
  },

  users: {
    createTable:
      "CREATE TABLE users (" +
      " NIC VARCHAR(15)," +
      " firstName VARCHAR(255)," +
      "lastName VARCHAR(255)," +
      " contactNo INT(10)," +
      "email VARCHAR(255) unique," +
      "password VARCHAR(32)," +
      "addNo VARCHAR(255)," +
      "addStreet VARCHAR(255)," +
      " addCity VARCHAR(255)," +
      "roleId varchar(10)," +
      "CONSTRAINT pk_users PRIMARY KEY (NIC)," +
      "CONSTRAINT fk_users_role FOREIGN KEY (roleId) REFERENCES role(roleId) ON DELETE CASCADE)",
    adduser:
      "INSERT INTO users(NIC,firstName,lastName,contactNo,email,password,addNo,addStreet,addCity,roleId) VALUE ?",
    getUser: "SELECT * FROM users where ?",
    SelectUser: "SELECT * from users WHERE email = ",
    deleteUser: "DELETE FROM users WHERE email = "
  },

  // mlt: {
  //   createTable:
  //     "CREATE TABLE mlt (" +
  //     "mltRegNo varchar(10)," +
  //     "NIC VARCHAR(15)," +
  //     "CONSTRAINT pk_mlt PRIMARY KEY (mltRegNo)," +
  //     "CONSTRAINT fk_mlt_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE)",
  //   adduser: "INSERT INTO mlt(NIC,mltRegNo)VALUE ?",
  //   getUser: "SELECT * FROM mlt where ?"
  // },

  // patient: {
  //   createTable:
  //     "CREATE TABLE patient (" +
  //     "patientId VARCHAR(15)," +
  //     "dob DATE," +
  //     "occupation VARCHAR(50)," +
  //     "bloodType VARCHAR(10)," +
  //     "maritalState BOOLEAN," +
  //     " height DECIMAL(5,2)," +
  //     "weight DECIMAL(5,2)," +
  //     " NIC VARCHAR(15)," +
  //     "CONSTRAINT pk_patient PRIMARY KEY (patientId)," +
  //     "CONSTRAINT fk_patient_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE)",
  //   adduser:
  //     "INSERT INTO patient(patientId,dob,occupation,bloodType,maritalState,height,weight,NIC)VALUE ?",
  //   getUser: "SELECT * FROM patient where NIC ="
  // },

  // doctor: {
  //   createTable:
  //     "CREATE TABLE doctor (" +
  //     " doctorRegNo VARCHAR(15)," +
  //     "doctorField VARCHAR(30)," +
  //     "doctorDesignation VARCHAR(50)," +
  //     "  workAddress VARCHAR(50)," +
  //     " NIC VARCHAR(15)," +
  //     " CONSTRAINT pk_doctor PRIMARY KEY (doctorRegNo)," +
  //     "CONSTRAINT fk_doctor_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE )",

  //   adduser:
  //     "INSERT INTO doctor(doctorRegNo,doctorField,doctorDesignation,workAddress,NIC)VALUE ?",
  //   getUser:
  //     "SELECT * FROM users u JOIN doctor d ON u.NIC = d.NIC where email = "
  // },

  frontdesk: {
    createTable:
      "CREATE TABLE frontdesk(" +
      "NIC varchar(15)," +
      "frontDeskId varchar(20)," +
      "CONSTRAINT pk_frontdesk PRIMARY KEY (frontDeskId)," +
      "CONSTRAINT fk_frontdesk_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE)",

    adduser: "INSERT INTO frontdesk (NIC,frontDeskId) VALUE ?",
    getUser: "SELECT * FROM frontdesk where ?"
  },

  patientbasichealthinfo: {
    createTable:
      "CREATE TABLE patientbasichealthinfo(" +
      " patientId VARCHAR(15)," +
      " currentDate DATE," +
      "cholestorol DECIMAL(5,2)," +
      " socialDisease VARCHAR(75)," +
      " allergy VARCHAR(75)," +
      " bloodPresure DECIMAL(5,2)," +
      "bloodSugar DECIMAL(5,2)," +
      " CONSTRAINT pk_patientbasichealthinfo PRIMARY KEY ()," +
      " CONSTRAINT fk_patientbasichealthinfo_patient FOREIGN KEY (patientId) REFERENCES patient(patientId) ON DELETE CASCADE )",

    adduser:
      "INSERT INTO patientbasichealthinfo( patientId,currentDate,cholestorol,socialDisease,allergy,bloodPresure,bloodSugar)VALUE ?",
    getUser: "SELECT * FROM patientbasichealthinfo where ?"
  },

  labreport: {
    createTable:
      "CREATE TABLE labreport(" +
      " reportNo INT(100)," +
      "reportName VARCHAR(50)," +
      "  pdfLocation VARCHAR(100)," +
      "CONSTRAINT pk_labreport PRIMARY KEY(reportNo)",

    adduser: "INSERT INTO labreport(reportNo,reportName,pdfLocation)VALUE ?",
    getUser: "SELECT * FROM labreport where ?"
  },

  diseasedetail: {
    createTable:
      "CREATE TABLE diseasedetail(" +
      " diseaseDetailId VARCHAR(100)," +
      " diseaseDescription VARCHAR(100)," +
      "reportAssign VARCHAR(100)," +
      "diseaseDate DATE," +
      " CONSTRAINT pk_diseasedetail PRIMARY KEY(diseaseDetailId)",

    adduser:
      "INSERT INTO diseasedetail(diseaseDetailId,diseaseDescription,reportAssign,diseaseDate)VALUE ?",
    getUser: "SELECT * FROM diseasedetail where ?"
  },

  medicine: {
    createTable:
      "CREATE TABLE medicine (" +
      "medicineName VARCHAR(100)," +
      "medicineNo VARCHAR(50)," +
      "CONSTRAINT pk_medicineNo PRIMARY KEY (medicineNo)",

    adduser: "INSERT INTO medicine(medicineName,medicineNo) VALUE ?",
    getUser: "SELECT * FROM medicine where ?"
  },

  prescription: {
    createTable:
      "CREATE TABLE prescription (" +
      "prescriptionId VARCHAR(15)," +
      "issueDate DATE," +
      "expireDate DATE," +
      "madicineName VARCHAR(100)," +
      "doctorRegNo VARCHAR(50)," +
      "diseaseDetailId VARCHAR(100)," +
      "recommandedTest VARCHAR(200)," +
      "medicineDosage VARCHAR(200)," +
      "medicineQty VARCHAR(200)," +
      "medicineNo VARCHAR(50)," +
      "CONSTRAINT pk_prescription PRIMARY KEY (prescriptionId)," +
      "CONSTRAINT fk_prescription_diseasedetail FOREIGN KEY(diseaseDetailId) REFERENCES diseasedetail(diseaseDetailId) ON DELETE CASCADE," +
      "CONSTRAINT fk_prescription_medicine FOREIGN KEY(medicineNo) REFERENCES  medicine(medicineNo) ON DELETE CASCADE)",

    addUser:
      "INSERT INTO prescription( prescriptionId,issueDate,expireDate,madicineName,doctorRegNo,diseaseDetailId,recommandedTest,medicineDosage,medicineQty,medicineNo)VALUE?",
    getUser: "SELECT * FROM prescription where ?"
  },

  appointment: {
    createTable:
      "CREATE TABLE appointment(" +
      " appId VARCHAR(15)," +
      "appDate DATE," +
      "appTime TIME," +
      "appStatus VARCHAR(100)," +
      "patientId VARCHAR(15)," +
      "doctorRegNo VARCHAR(15)," +
      " CONSTRAINT pk_appointment PRIMARY KEY(apptId)" +
      " CONSTRAINT fk_appointment_patient FOREIGN KEY(patientId) REFERENCES patient(patientId) ON DELETE CASCADE )" +
      " CONSTRAINT fk_appointment_doctor FOREIGN KEY(doctorRegNo) REFERENCES doctor (doctorRegNo) ON DELETE CASCADE )",

    adduser:
      " INSERT INTO appointment(appId,appDate,appTime,appStatus,patientId,doctorRegNo)VALUE ?",
    getUser: "SELECT * FROM appointment where ?"
  },
  appSchedule: {
    createTable:
      "CREATE TABLE appSchedule (" +
      " appScheduleId," +
      "noOfAppointments," +
      "dateTimeIn," +
      "dateTimeOut," +
      "doctorRegNo," +
      " CONSTRAINT pk_appSchedule PRIMARY KEY (appScheduleId)" +
      "CONSTRAINT fk_appSchedule_doctor FOREIGN KEY(doctorRegNo) REFERENCES doctor(doctorRegNo) ON DELETE CASCADE)",

    adduser:
      " INSERT INTO appSchedule(appScheduleId,noOfAppointments,dateTimeIn,dateTimeOut,doctorRegNo)VALUE ?",
    getUser: "SELECT * FROM appSchedule where ?"
  },

  currentState: {
    createTable:
      "CREATE TABLE currentState (" +
      "prescriptionId VARCHAR(15), " +
      " duration INT(10)," +
      " currentStateDate DATE," +
      " state VARCHAR(100)," +
      "comment VALUE(200)," +
      " CONSTRAINT pk_currentStateDate PRIMARY KEY (currentStateDate)," +
      " CONSTRAINT fk_currentState_prescription FOREIGN KEY(prescriptionId) REFERENCES prescription(prescriptionId) ON DELETE CASCADE)",

    adduser:
      "INSERT INTO currentState (prescriptionId,duration,currentStateDate,state,comment)VALUE?"
  }

  //   payment: {
  //     createTable:
  //       "CREATE TABLE payment(" +
  //       "paymentId VARCHAR(50)," +
  //       "patientId VARCHAR(15)," +
  //       "appId VARCHAR(15)," +
  //       " payDate DATE," +
  //       " payAmount DECIMAL(5,2)," +
  //       "states VARCHAR(10)," +
  //       "reportNo INT(100)," +
  //       "CONSTRAINT pk_paymentId PRIMARY KEY (paymentId)," +
  //       "CONSTRAINT fk_payment_patient FOREIGN KEY(patientId) REFERENCES patient(patientId) ON DELETE CASCADE," +
  //       "CONSTRAINT fk_payment_appointment FOREIGN KEY(appId) REFERENCES appointment(appId) ON DELETE CASCADE," +
  //       "CONSTRAINT fk_payment_labreport FOREIGN KEY(reportNo) REFERENCES labreport(reportNo) ON DELETE CASCADE)",

  //     adduser:
  //       "INSERT INTO currentState (prescriptionId,duration,currentStateDate,state,comment)VALUE?"
  //   }
};

module.exports.tables = tables;

module.exports.tablesname = [
  "role",
  "users",
  "mlt",
  "patient",
  "doctor",
  "frontdesk",
  "patientbasichealthinfo",
  "labreport",
  "diseasedetail",
  "prescription",
  "medicine",
  "appointment",
  "appSchedule"
];
