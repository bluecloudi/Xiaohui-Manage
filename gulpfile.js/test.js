const{electron}=require('electron');
const{gulp}=require('gulp');
function test(cb){
    electron.start();
    cb();
}
exports.test=test;