var util=require('util');
var txt = 'congratulate %s on his %d th birthday';
var result=util.format(txt,'john',11);
console.log(result);

