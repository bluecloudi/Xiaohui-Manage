const{electron}=require('electron');
function test(cb){
    electron.start();
    cb();
}
exports.test=test;