var buf1=Buffer.from('1234567899');
var buf2=Buffer.from('hello');
buf2.copy(buf1,2);

console.log(buf1.toString());
console.log(Buffer.concat([buf1,buf2]).toString());
console.log(buf1.equals(buf2));
console.log(Buffer.compare(buf1,buf2));
