function makeChange(amout) {
    const coins = [1, 5, 10, 25];
    let min = [];
    let newMin, newAount;
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        newAount = amout - coin;
        if (newAount >= 0) {
            newMin = makeChange(newAount);
        }
        if (newAount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAount)) {
            min = [coin].concat(newMin);
        }
    }
    return min;
}

console.log(makeChange(36));
