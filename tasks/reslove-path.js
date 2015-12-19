var path = require('path'),
    fs = require('fs');

function module_paths(dir, subdir) {
    var arr = [], cur;
    do {
        cur = path.resolve(dir);
        arr.push(path.resolve(cur, subdir));
        dir = path.dirname(cur);
    } while (cur != dir);
    return arr;
}

function node_modules(dir) {
    return module_paths(dir, 'node_modules');
}

function bower_components(dir) {
    return module_paths(dir, 'bower_components');
}

function sass_paths(dir, libs) {
    var dist = [];
    var dirs = node_modules(dir).concat(bower_components(dir));
    libs.forEach(function(it){
        for(var i=0, l= dirs.length; i<l; ++i) {
            dir = path.resolve(dirs[i] , it);
            if (fs.existsSync(dir)) {
                dist.push(dir);
                break;
            }
        }
    });
    return dist;
}

module.exports.node_modules = node_modules;
module.exports.bower_components = bower_components;
module.exports.module_paths = module_paths;
module.exports.sass_paths = sass_paths;