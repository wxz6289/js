let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}]
};

meetup.place = room;  
room.occupiedBy = meetup;

// JSON.stringify(meetup); // 不能循环引用
let str = JSON.stringify(meetup, ['title', 'participants','place',"name", "number"])
console.log(str);
let str2 = JSON.stringify(meetup, function(key, value){
    return key == 'occupiedBy'? undefined: value;
});

console.log(str2);

let str3 = JSON.stringify(meetup, function (key, value) {
    return key == 'occupiedBy' ? undefined : value;
}, 2);

console.log(str3);

//排除反向引用
let str4 = JSON.stringify(meetup, function (key, value) {
    return key != '' && value == meetup;
}, 2);

console.log(str3);
