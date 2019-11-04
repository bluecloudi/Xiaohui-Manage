const{clean}=require('./clean');
const{compilestylus}=require('./stylus');
const{series}=require('gulp');
exports.default= series(clean,compilestylus);