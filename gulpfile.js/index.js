const{clean}=require('./clean');
const{compilestylus}=require('./stylus');
const{series}=require('gulp');
const{test}=require('./test');
exports.default= series(clean,compilestylus,test);

