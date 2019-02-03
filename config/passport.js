const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const database = require ('../databaseHandle/connectDatabase');
const config = require('../config/jwt');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,function(jwt_payload, done){
        //console.log(jwt_payload);
        database.selectUser(jwt_payload.UserID,function(err,user){
            if(err){
                return done(err,false)
            }
            if(user){
                //console.log(user);
                return done(null,toObject(user));
            }
            else{
                return done(null,false);
            }
        });
    }));
}

function toObject(user){
    return ({DOB:user[0].DOB,
        email: user[0].Email,
        ContactNo: user[0].ContactNo,
        AddStreet: user[0].AddStreet,
        AddCity: user[0].AddCity,
        AddNo: user[0].AddNo,
        FirstName: user[0].FirstName,
        LastName: user[0].LastName,
        MiddleName: user[0].MiddleName,
        })
}