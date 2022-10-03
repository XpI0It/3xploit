const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const fs = require("fs");
const clientSessions = require("client-sessions");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(clientSessions({
  cookieName: "session", 
  secret: "3XPLOIT", 
  duration: 2 * 60 * 1000, 
  activeDuration: 1000 * 60
}));

app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

function ensureLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect("/login");

  } else {
    next();
  }
};

app.get("/", (req, res) => {
    res.render('main', {
      layout: "main"
    })
  });

app.get("/login", (req, res) => {
  res.render('login', {
    layout: "main"
  })
});

app.get("/register", (req, res) => {
  res.render('register', {
    layout: "main"
  })
});

app.post("/login", (req, res) => {
    // Accessing data from body
    var email = req.body.email;
    var password = req.body.password;
    
    // local data for validation
    var user1 = {
        mail: "vmp@mail.com",
        password: 'vmp123',
        username: 'vmp'
    }

    var user2 = {
        mail: "vansh@mail.com",
        password: 'vmp123',
        username: 'vmp1'
    }
    
    const users  = [user1, user2];    // array of users

    users.forEach((u) => {
        if(email === u.mail && password === u.password) res.redirect("/");
    });
    res.send("Invalid Credentials");
});

// post: Register form
app.post("/register", (req, res) => {

    var username = req.body.username;
    var password = req.body.password;
    var mail = req.body.email;

    // local data for validation
    var user1 = {
        mail: "vmp@mail.com",
        password: 'vmp123',
        username: 'vmp'
    }

    var user2 = {
        mail: "vansh@mail.com",
        password: 'vmp123',
        username: 'vmp1'
    }
    
    const users  = [user1, user2];    // array of users

    // check if data is null or empty
    var check1 = (mail === "" || mail === undefined);
    var check2 = (username === "" || username === undefined);
    var check3 = (password === "" || password === undefined);

    if(check1 || check2 || check3) res.send("Please enter all values");

    // checks if user already exists or not
    users.forEach((u)=>{
        if(u.mail === req.body.email)   res.send("Email already exists");
    });

    // checks for all usernames: whether taken or not
    users.forEach((u) => {
        if(u.username === req.body.username) res.send("Username already exists")
    });

    var newUser = {
        mail: mail,
        username: username,
        password: password
    }
    users.push(newUser);
    res.send(mail + " " + username + " " + password);
});


app.get("/logout", (req, res) => {
  req.session.reset();
  res.redirect("/");
});

app.get("/leaderboard", ensureLogin, (req, res) => {
  res.render('leaderboard', {
    layout: "main"
  })
});

app.get("/gamemodule", ensureLogin, (req, res) => {
    res.render('gamemodule', {
      layout: "main"
    })
  });

//handlebars template engine
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {

    //helper highlights the navbar element if user is on the url the element takes you to
    navLink: function (url, options) {
      return '<li' +
        ((url == app.locals.activeRoute) ? ' class="active" ' : '') +
        '><a href="' + url + '">' + options.fn(this) + '</a></li>';
    },

    equal: function (lvalue, rvalue, options) {
      if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
      if (lvalue != rvalue) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    }
  }
}));
app.set('view engine', '.hbs');


const HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

app.use(function (req, res, next) {
  let route = req.baseUrl + req.path;
  app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
  next();
});



app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
