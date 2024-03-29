// This is our regular setup that we need to carry-out at the beginning of every "app.js" file:

var bodyParser = require("body-parser"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

// Here we are connecting to our already running "mongoDB" server:

// mongoose.connect("mongodb://localhost/advanced_buildings_services_app")

// The below line of code is needed in order to set the default file type to "ejs":

app.set("view engine", "ejs")

// The below are also default line of codes that we always need to add to out "app.js" file. The below defines our default NodeJS directiory (i.e., "public"). 
// Which we can then use to tell the application, this is the directory where we are going to have things such as fonts, stylesheets and javascripts. This "public" directory is going to live inside the root of our App:

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

// Resftul Routes:

// Index Restful Route. The first Restful Route is Index Route. Notice that when we rendered "index" we did not have to type ".ejs" this is because of the default "viewengine" that we set up:

// It is a common practice for most website to direct the user to "index" as their homepage. Therefore, below we are directing the user to "/homepage" whenever a path of "/" has been requested:

app.get("/", function(req, res){
    
    res.redirect("/homepage");
    
});

app.get("/homepage", function(req, res){
    
    res.render("index");
    
});

// This is our route which direct the user to the ABOUT US page when the user click on it from the NavBasr:

app.get("/about", function (req, res){
    
    res.render("aboutus");
    
})

// The below code is needed to set up a PORT in order to be able to run our application:

app.listen(process.env.PORT, process.env.IP, function() {
    
    console.log("Server is running");
    
})

