function strlen(text) {
    let  result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

console.log(strlen("曌𠮷"), "曌𠮷".length);
