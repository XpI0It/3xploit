const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('xiagvejc', 'xiagvejc', 'PvbnkQqXu0rmMQk-RM-swrJJ_9Ojy4bz', {
    host: 'peanut.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

sequelize
    .authenticate()
    .then(function() {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    });


    var User =  sequelize.define('UserRanking', {
        username: {
            type: Sequelize.STRING,
            primaryKey: true,
            
        },
        time: 
        {
            type: Sequelize.DOUBLE,
        },
        level: 
        {
            type: Sequelize.INTEGER,
        },
        rank:{
            type: Sequelize.INTEGER,
            autoIncrement: true
        }
    });

    module.exports.getAllUserRanking = function(){
        return new Promise(function(resolve,reject){
            User.findAll().then(function(data){
                
                    resolve(data);
            }).catch(function(error){
                    console.log("Error",error);
                    reject("No results returned");
            });
        });
    };


    module.exports.deleteUserRanking = function(username){
        return new Promise(function(resolve,reject){
            console.log("Username",username);
            User.destroy({
                where: {username : username}
            }).then(function(){
                resolve("destroyed");
            }).catch(function(){
                reject("Error in destroying");
            });
        });
    };

    module.exports.updateUserRanking = function (userData) {
        return new Promise(function(resolve,reject){
            if(userData.level > (userData.level)){
                User.update(userData,{
                    where: {level: userData.level, }
    
                }).then(function(){
                    resolve("Successfully updated.");
                }).catch(function(){
                    reject("Unable to update user ranking");
                });
            }

            if(userData.time < (userData.time)){

                User.findAll().then(function(data){
                    while(userData.time < data.time){
                        User.update(userData, {
                            where: {level: (level-1)}
                        });
                        data.update(data, {
                            where: {level: (level+1)}
                        })
                    }
                    resolve(data);
                }).catch(function(error){
                        console.log("Error",error);
                        reject("No results returned");
                });

                User.update(userData,{
                    where: {level: userData.level, }
    
                }).then(function(){
                    resolve("Successfully updated.");
                }).catch(function(){
                    reject("Unable to update user ranking");
                });
            }
            userData.level > (userData.level) ? true:false;

            for (const values in studentData)
            {
                if (!studentData[values]) 
                {
                    studentData[values] = null; 
                }
            }
            
        });
    };

    module.exports.addUserRanking = function (userData) {
        return new Promise(function(resolve,reject){
    
            for (const keys in userData)
            {
                if (!userData[keys]) 
                {
                    userData[keys] = null; 
                }
            }
            console.log(userData);
            User.create(userData).then(function(data){
                resolve(data);
            }).catch(function(){
                    reject("No results returned");
            });
            
            User.findAll().then(function(data){
                while(userData.time < data.time){
                    User.update(userData, {
                        where: {level: (level-1)}
                    });
                    data.update(data, {
                        where: {level: (level+1)}
                    })
                }
                resolve(data);
            }).catch(function(error){
                    console.log("Error",error);
                    reject("No results returned");
            });
        });
    };

    sequelize.sync().then(function () {

        // create a new "Project" and add it to the database
        User.create({
            username: "ssss",
            time: 52.23,
            level: 25,
        }).then(function (user) {
            // you can now access the newly created Project via the variable project
            console.log("success!")
        }).catch(function (error) {
            console.log("something went wrong!");
        });

        User.create({
            username: "sdsdsds",
            time: 54.12,
            level: 24,
        }).then(function (user) {
            // you can now access the newly created Project via the variable project
            console.log("success!")
        }).catch(function (error) {
            console.log("something went wrong!");
        });

        User.create({
            username: "s4gdds",
            time: 20.00,
            level: 25,
        }).then(function (user) {
            // you can now access the newly created Project via the variable project
            console.log("success!")
        }).catch(function (error) {
            console.log("something went wrong!");
        });

    });