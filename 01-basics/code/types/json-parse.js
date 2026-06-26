let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
console.log(user);

// reviver 可在解析时转换字段类型
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function (key, value) {
  if (key === 'date') return new Date(value);
  return value;
});
console.log(meetup.date.getDate()); // 30
