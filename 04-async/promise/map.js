const fs = require('fs');
const path = require('path');

function findLargest(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, function(err, files) {
      if(err) throw err;
      resolve(files);
    });
  })
  .then(files => {
      return Promise.all( files.map( file => {
        return new Promise( resolve => {
          fs.stat(path.join(dir, file), (err, stat) => {
            if(err) throw err;
            if( stat.isDirectory()) {
                return resolve({
                  size: 0
                });
              }
            stat.file = file;
            resolve(stat);
          });
        });
      }));
    })
    .then( stats => {
      let biggest = stats.reduce( (memo, stat) => {
        if(memo.size < stat.size) {
          return stat;
        }
        return memo;
      });
      return biggest.file;
    })
  };

findLargest("../object").then(value => {
    console.log(value);
}).catch(err => {
  console.error(err);
})

// findLargest('../object',function(err, filename) {
// 	if(err) return console.error(err);
// 	console.log("largest file was:", filename);
// })
