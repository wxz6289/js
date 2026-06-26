let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup = { title: 'Conference', room };

console.log(JSON.stringify(room));   // "23"
console.log(JSON.stringify(meetup)); // {"title":"Conference","room":23}
