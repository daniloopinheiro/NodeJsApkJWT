// //#!/usr/bin/env node

// const readline = require('readline');
// var Writable = require('stream').Writable;
// var mutableStdout = new Writable({
//     write: function(chunk, encoding, callback) {
//         if (!this.muted)
//             process.stdout.write(chunk, encoding);
//         callback();
//     }
// });
// mutableStdout.muted = false; // Default: Make the output stream visible

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: mutableStdout,
//     terminal: true
// });

// rl.question("Enter username: ", (uname)=>{
//     rl.question("Enter password: ", (pass)=>{
//         mutableStdout.muted = false; // Make the output stream visible again for further inputs
//         rl.clearLine(mutableStdout, 0);
//         //console.log(); // An alternate for rl.clearLine(mutableStdout, 0);
//         rl.question("Enter age: ", (age)=>{
//             rl.question("Gender: ", (gender)=>{
//                 logData(uname, pass, age, gender);
//                 rl.close();
//             });
//         });
//     });
//     mutableStdout.muted = true; // Hide the output stream while entering password
// });

// var logData = function() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }