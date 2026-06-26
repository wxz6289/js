let room = { number: 23 };
let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
};
meetup.place = room;
room.occupiedBy = meetup;

// 方式 1：replacer 数组白名单
console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

// 方式 2：replacer 函数排除指定键
console.log(JSON.stringify(meetup, (key, value) =>
  key === 'occupiedBy' ? undefined : value
));

// 方式 3：排除指向根对象的反向引用
console.log(JSON.stringify(meetup, (key, value) =>
  key !== '' && value === meetup ? undefined : value
, 2));
