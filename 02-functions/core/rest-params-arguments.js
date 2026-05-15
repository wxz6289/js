function checkArgs(a, ...args) {
    console.log(args.length, arguments.length);
    console.log(args);
    console.log(arguments);
    args[0] = "A";
    console.log(arguments);
}

checkArgs(12, 10);