const fs = require('fs');
const path = require('path');

/**
 * create file
 */
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created..');
// });

/**
 * create and write file
 */
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'Hello World!', 
//     err => {
//         if (err) throw err;
//         console.log('File wriiten to...');
//     }
// );

/**
 * append file
 */
// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'Hello World 123!', 
//     err => {
//         if (err) throw err;
//         console.log('File wriiten to...');
//     }
// );

/**
 * write file
 */
// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//      'utf8', 
//      (err, data) => {
//          if (err) throw err;
//          console.log(data);
//     }
// );

/**
 * rename file
 */
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    //  'utf8', 
     (err) => {
         if (err) throw err;
         console.log('File renamed');
    }
);