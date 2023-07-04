const bcrypt = require("bcrypt");

const User = require("../models/User");
const passport = require("../lib/passportConfig");

// exports.auth_signup_get = (req, res) => {
//     res.render('auth/signup')
// }

// exports.auth_signin_get = (req, res) => {
//     res.render('auth/signin')
// }

// exports.auth_signup_post = async (req, res) => {
//     try {
//         console.log(req.body)
//         const user = new User(req.body)

//         const hash = bcrypt.hashSync(req.body.password, 10)
//         console.log(hash)

//         user.password = hash

//         await user.save()

//         // res.redirect('/')
//         res.json ({'message': "User created "})
//     } catch (error) {
//         console.log(error.message)
//         res.json ({'message': "Error creating user"})
//     }
// }

// // exports.auth_signin_post = passport.authenticate('local', {
// //     successRedirect: '/',
// //     failureRedirect: '/auth/signin'
// // })
// const jwt = require("jsonwebtoken");
// exports.auth_signin_post = async (req, res) => {
//     let { emailAddress, password} = req.body;
//     // Search for user with emailAddress
//     try{
//         let user = await User.findOne({ emailAddress });
//         console.log(user);
//         if(!user){
//             return res.json({"message": "User not found!"}).status(400);
//         }
//         // Password Comparison
//         const isMatch = await bcrypt.compareSync(password, user.password);
//         console.log(password); // Plain Text Password
//         console.log(user.password); // Hashed Password
//         if(!isMatch){
//             return res.json({"message": "Password not matched!!"}).status(400);
//         }
//         // Generate JWT
//         const payload = {
//             user: {
//                 id: user._id
//             }
//         }
//         jwt.sign(
//             payload,
//             "SUPERMAN",
//             { expiresIn: 36000000 },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token }).status(200);
//             }
//         )
//     } catch(error){
//         console.log(error);
//         res.json({"message": "You are not logged In !!!"}).status(400);
//     }
// }

// exports.auth_logout_get = (req, res, next) => {
//      req.logout(function(err){
//         if (err) {
//             return next()
//         }
//         res.redirect('/auth/signin')
//     })
// }

const User = require("../models/User"); // your user model

const login = (req, res) => {
  res.render("login");
};

const dashboard = async (req, res) => {
  try {
    // Check if the user already exists in the database
    const { email } = req.user;
    let user = await User.findOne({ email });

    if (user) {
      // If the user already exists, update their access token and refresh token
      user.access_token = req.user.access_token;
      user.refresh_token = req.user.refresh_token;
      user = await user.save();
    } else {
      // If the user does not exist, create a new user with their email and access token
      user = await User.create({
        email,
        access_token: req.user.access_token,
        refresh_token: req.user.refresh_token,
      });
    }

    res.render("dashboard", { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  login,
  dashboard,
};
