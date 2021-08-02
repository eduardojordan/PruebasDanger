const {danger, warn} = require('danger')
const docsSwift = danger.git.fileMatch("**/*.swift")

//const { exec } = require('child_process');
 const { exec } = require('child_process');


// if (docsSwift.edited) {
//  fail("Se han realizado cambios en el proyecto archivo .swift")
// // return 1
// } 
// console.log(callTimes()); 
 // process.exit(1);
 // exec(child_process.spawnSync('echo', ['abc']));
// process.on('exit', function() { process.exit(1); });
// return console.log(callTimes());

// process.exit(1);
//
//  const { exec } = require('child_process');
//  exec("var= 1",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});

// // return  exec("so [-tag]")
 // exec("echo $?")



// function callTimes() {
//   let count = 1;
//   return process.exit(1);
// }

// process.exit(1);
// exec("echo $?",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});



// const version = danger.git.fileMatch("**/*.xcworkspacedata")

// if (version.edited) {
//   //message("Se han realizado cambios en el proyecto archivo .swift")
//    warn("Se han realizado cambios en la version del proyecto2")
//    process.exit(1);
// } 


