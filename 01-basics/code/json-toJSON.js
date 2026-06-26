let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let meetup = {
    title: "Conference",
    room
};

let s = JSON.stringify(room);
console.log(s);
s = JSON.stringify(meetup);
console.log(s);

