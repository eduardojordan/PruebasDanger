
import { danger } from "danger"

const docsSwift = danger.git.fileMatch("**/*.swift")

// const { exec } = require('child_process');
// const shell = require('shelljs')

// var valorRetorno = '0'

if (docsSwift.edited) {
 fail("Se han realizado cambios en el proyecto archivo .swift")

//enviar respuesta a otro script que sera llamado en pre-commit
// return valorRetorno = '3'
// console.log( valorRetorno)
 } 


// console.log(valorRetorno)
// ACA DEBERIA EXPORTAR ESTE VALOR PARA PRE_COMMIT







//process.exit(1);
// console.log($?)

//exec("tag",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});
 // result = 1
// console.log(1)
// process.stdout.write(1);


  // exec("echo ANTES DE $valor",
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec("declare -r valor = 2"),
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec("echo DESPUES DE valor ${!valor}",
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


 

  // exec('echo ANTES DE $?',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


  // exec('var=1 ',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });

  // exec('echo DESPUES DE $valor',
  //       (error, stdout, stderr) => {
  //           console.log(stdout);
  //           console.log(stderr);
  //           if (error !== null) {
  //               console.log(`exec error: ${error}`);
  //           }
  //       });


//  if (result = 0) {
//   console.log("DA 0 SIGUE COMMIT NORMAL")
// } else {
//    console.log("DA 1 -> LANZAR ALERTA DE COMMIT")




 // exec('sh .git/hooks/pre-commit',
 //        (error, stdout, stderr) => {
 //            console.log(stdout);
 //            console.log(stderr);
 //            if (error !== null) {
 //                console.log(`exec error: ${error}`);
 //            }
 //        });

// }

// process.exit(1);
// return 1
// return process.exit(1);
//exec("so [-tag]",(error, stdout, stderr) => {console.log(stdout);console.log(stderr);});




// const version = danger.git.fileMatch("**/*.xcworkspacedata")
// if (version.edited) {
//   //message("Se han realizado cambios en el proyecto archivo .swift")
//    warn("Se han realizado cambios en la version del proyecto2")
//    process.exit(1);
// } 

