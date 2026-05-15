let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let unreadSet = new WeakSet(messages);
console.log(unreadSet.has(messages[2]));
let p = messages.pop();
console.log(unreadSet.has(p));
unreadSet.delete(p)
console.log(unreadSet.has(p));


