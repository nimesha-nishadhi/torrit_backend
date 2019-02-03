CREATE TABLE role(
    roleId varchar(10),
    roleName	varchar(20),
    CONSTRAINT pk_role PRIMARY KEY (roleId)
)
INSERT INTO role (roleId,roleName) VALUE ("001","doctor");

CREATE TABLE users (
    NIC VARCHAR(15),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    contactNo INT(10),
    email VARCHAR(255) unique,
    password VARCHAR(32),
    addNo VARCHAR(255),
    addStreet VARCHAR(255),
    addCity VARCHAR(255),
    roleId varchar(10),
    CONSTRAINT pk_users PRIMARY KEY (NIC),
    CONSTRAINT fk_users_role FOREIGN KEY (roleId) REFERENCES role(roleId) ON DELETE CASCADE
 )
 INSERT INTO users(NIC,firstName,lastName,contactNo,email,password,addNo,addStreet,addCity,roleId)VALUE("958612184V","Chandi","Premarathne","0713067517","chansayumdi@gmail.com","123","E30","Jaya Mawatha","Moratuwa","002")

 CREATE TABLE mlt (
    mltRegNo varchar(10),
     NIC VARCHAR(15),
    CONSTRAINT pk_mlt PRIMARY KEY (mltRegNo),
    CONSTRAINT fk_mlt_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE
 )
 INSERT INTO mlt(NIC,mltRegNo)VALUE("mlt01","966440708v");

 CREATE TABLE patient (
    patientId VARCHAR(15),
    dob DATE,
    occupation VARCHAR(50),
    bloodType VARCHAR(10),
    maritalState BOOLEAN,
    height DECIMAL(5,2),
    weight DECIMAL(5,2),
    NIC VARCHAR(15),
    CONSTRAINT pk_patient PRIMARY KEY (patientId),
    CONSTRAINT fk_patient_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE
 )
 INSERT INTO patient(patientId,dob,occupation,bloodType,maritalState,height,weight,NIC)VALUE("001","1995/12/26","Student","B+","1","135.25","57","2545124458V");


CREATE TABLE doctor (
doctorRegNo VARCHAR(15) ,
    doctorField VARCHAR(30),
    doctorDesignation VARCHAR(50),
    workAddress VARCHAR(50),
    NIC VARCHAR(15),
    CONSTRAINT pk_doctor PRIMARY KEY (doctorRegNo),
    CONSTRAINT fk_doctor_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE
 )
 INSERT INTO doctor(doctorRegNo,doctorField,doctorDesignation,workAddress,NIC)VALUE("001","1995/12/26","Student","B+","1","135.25","57","958612184V");

 CREATE TABLE frontdesk(
    NIC varchar(15),
    frontDeskId	varchar(20),
    CONSTRAINT pk_frontdesk PRIMARY KEY (frontDeskId),
    CONSTRAINT fk_frontdesk_users FOREIGN KEY (NIC) REFERENCES users(NIC) ON DELETE CASCADE
  )
  INSERT INTO frontdesk(NIC,frontDeskId)VALUE("958612184V","00F1");

  CREATE TABLE patientbasichealthinfo(
       patientId VARCHAR(15),
       currentDate DATE,
       cholestorol DECIMAL(5,2),
       socialDisease VARCHAR(75),
       allergy VARCHAR(75),
       bloodPresure DECIMAL(5,2),
       bloodSugar DECIMAL(5,2),
       CONSTRAINT pk_patientbasichealthinfo PRIMARY KEY(currentDate)
       CONSTRAINT fk_patientbasichealthinfo_patient FOREIGN KEY (patientId) REFERENCES patient(patientId) ON DELETE CASCADE
  )
  INSERT INTO patientbasichealthinfo( patientId,currentDate,cholestorol,socialDisease,allergy,bloodPresure,bloodSugar)VALUE("","");

  CREATE TABLE labreport(
      reportNo INT(100),
      reportName VARCHAR(50),
      pdfLocation VARCHAR(100),
      CONSTRAINT pk_labreport PRIMARY KEY(reportNo)
  )
  INSERT INTO labreport(reportNo,reportName,pdfLocation)VALUE(" "," ");

  CREATE TABLE diseasedetail(
     diseaseDetailId VARCHAR(100),
     diseaseDescription VARCHAR(300),
     reportAssign VARCHAR(100),
     diseaseDate DATE,
     CONSTRAINT pk_diseasedetail PRIMARY KEY(diseaseDetailId)

  )
  INSERT INTO diseasedetail( diseaseDetailId,diseaseDescription,reportAssign,diseaseDate)VALUE(" "," ")

   CREATE TABLE prescription (
    prescriptionId VARCHAR(15), 
    issueDate DATE,
    expireDate DATE,
    madicineName VARCHAR(100),
    doctorRegNo VARCHAR(50),
    diseaseDetailId VARCHAR(100),
    recommandedTest VARCHAR(200),
    medicineDosage VARCHAR(200),
    medicineQty VARCHAR(200),
     medicineNo VARCHAR(50),
    CONSTRAINT pk_prescription PRIMARY KEY (prescriptionId),
    CONSTRAINT fk_prescription_diseasedetail FOREIGN KEY(diseaseDetailId) REFERENCES diseasedetail(diseaseDetailId) ON DELETE CASCADE,
   CONSTRAINT fk_prescription_medicine FOREIGN KEY(medicineNo) REFERENCES  medicine(medicineNo) ON DELETE CASCADE
 )
    INSERT INTO prescription( prescriptionId,issueDate,expireDate,madicineName,doctorRegNo,diseaseDetailId,recommandedTest)VALUE(" ?","? "," ?","? "," ?","? "," ?")

  CREATE TABLE appointment (
    appId VARCHAR(15),
    appDate DATE, 
    appTime TIME,
    appStatus VARCHAR(100),
    patientId VARCHAR(15),
   doctorRegNo VARCHAR(15),
    CONSTRAINT pk_appointment PRIMARY KEY (appId),
    CONSTRAINT fk_appointment_patient FOREIGN KEY(patientId) REFERENCES patient(patientId) ON DELETE CASCADE,
     CONSTRAINT fk_appointment_doctor FOREIGN KEY(doctorRegNo) REFERENCES doctor (doctorRegNo) ON DELETE CASCADE )
 )
  INSERT INTO appointment(appId,appDate,appTime,appStatus,patientId,doctorRegNo,prescriptionId)VALUE(" "," ");

 
  
   CREATE TABLE appSchedule (
    appScheduleId VARCHAR(15),
    noOfAppointments INT,
    dateTimeIn DATE,
    dateTimeOut DATE,
    doctorRegNo VARCHAR(15),
    CONSTRAINT pk_appSchedule PRIMARY KEY (appScheduleId),
    CONSTRAINT fk_appSchedule_doctor FOREIGN KEY(doctorRegNo) REFERENCES doctor(doctorRegNo) ON DELETE CASCADE
 )
 INSERT INTO appSchedule (appScheduleId,noOfAppointments,dateTimeIn,dateTimeOut,doctorRegNo)VALUE(" "," ");

 CREATE TABLE currentState (
   prescriptionId VARCHAR(15), 
   duration INT(10),
   currentStateDate DATE,
   state VARCHAR(100),
   comment VALUE(200),
    CONSTRAINT pk_currentStateDate PRIMARY KEY (currentStateDate),
    CONSTRAINT fk_currentState_prescription FOREIGN KEY(prescriptionId) REFERENCES prescription(prescriptionId) ON DELETE CASCADE
 )
 INSERT INTO medicine (madicineName, medicineNo)VALUE(" "," ");

 CREATE TABLE payment(
    paymentId VARCHAR(50),
    patientId VARCHAR(15),
     appId VARCHAR(15),
     payDate DATE,
     payAmount DECIMAL(5,2),
     states VARCHAR(10),
     reportNo INT(100),
     CONSTRAINT pk_paymentId PRIMARY KEY (paymentId),
    CONSTRAINT fk_payment_patient FOREIGN KEY(patientId) REFERENCES patient(patientId) ON DELETE CASCADE,
     CONSTRAINT fk_payment_appointment FOREIGN KEY(appId) REFERENCES appointment(appId) ON DELETE CASCADE,
      CONSTRAINT fk_payment_labreport FOREIGN KEY(reportNo) REFERENCES labreport(reportNo) ON DELETE CASCADE
      )


 