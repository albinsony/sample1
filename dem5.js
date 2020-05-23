var url=require('url');
var addr='http://localhost:8080/default.html?year=2019&month=february';
var q=url.parse(addr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);