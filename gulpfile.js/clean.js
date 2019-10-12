const{del}=require('del');
const{gulp}=require('gulp');
function clean(cb){
    del(['dist/*']);
    del(['app/dist/*']);
    cb();
}
exports.clean=clean;