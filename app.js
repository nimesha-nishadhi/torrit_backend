const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const database = require("./databaseHandle/connectDatabase");
const app = express();
const http = require("http");

const role = require("./routes/role");
const users = require("./routes/users");
const mlt = require("./routes/mlt");
const patient = require("./routes/patient");
const doctor = require("./routes/doctor");
const frontdesk = require("./routes/frontdesk");
const patientbasichealthinfo = require("./routes/patientbasichealthinfo");
const labreport = require("./routes/labreport");

const diseasedetail = require("./routes/diseasedetail");
const prescription = require("./routes/prescription");
const appSchedule = require("./routes/appSchedule");
const medicine = require("./routes/medicine");
const payment = require("./routes/payment");
const currentState = require("./routes/currentState");
const category = require("./routes/Category");

const myRoute = require("./routes/myRoute");

//set port
const port = 3000;
// connect to database
database.connet();
// cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// passport middle ware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

// index route
app.get("/", function(req, res) {
  console.log("index route called");
  res.status(200).json({
    Message: "Hello"
  });
});

app.use("/role", role);
app.use("/users", users);
app.use("/mlt", mlt);
app.use("/patient", patient);
app.use("/doctor", doctor);
app.use("/frontdesk", frontdesk);
app.use("/patientbasichealthinfo", patientbasichealthinfo);
app.use("/labreport", labreport);

app.use("/diseasedetail", diseasedetail);
app.use("/prescription", prescription);
app.use("/appSchedule", appSchedule);
app.use("/medicine", medicine);
app.use("/payment", payment);
app.use("/currentState", currentState);
app.use("/category", category);

app.use("/myRoute", myRoute);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
