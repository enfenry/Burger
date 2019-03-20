// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

let express = require("express");
let app = express();

let burger = require("../models/burger");

let orm = require("../config/orm");




module.exports = function (app) {
    let connection = require("../config/connection");

    app.get("/", function (req, res) {

        let cb = function(argument) {
            res.render("index", { burger: argument });
            console.log(argument);
            // return argument;
        }
            orm.selectAll(cb);
    });

    app.post("/", function (req, res) {
        // Test it.
        console.log('You sent, ' + req.body.burger);

        let cb = function() {
            res.redirect("/");
        }
        orm.insertOne(req.body.burger,cb);

        
    });
}



