var pickfile = require('pickfile');
var fs = require('fs'); 

module.exports = function(dirs, type){
    if(typeof dirs === 'string'){
        dirs = [dirs];
    }

    if(type === undefined){
        type = ['js']
    }
    else if(type.length === undefined){
        type = [type];
    }

    pickfile({
        dirs: dirs,
        type: type,
        filter: function(file, content, next){
            console.log(file);
            fs.writeFileSync(file, content.toString().replace(/\t/g, '    '));
            next();
        },
        done: function(){
            console.log('all file done');
        }
    });
};

