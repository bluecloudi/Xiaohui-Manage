const{clean}=require('./clean') ;
const{series}=require('gulp');
exports.default= series(clean);