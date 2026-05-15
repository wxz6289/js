var origin = `奴隶社会,非洲,古埃及文明,金字塔
,亚洲,两河流域文明,汉谟拉比法典
,,古印度,种姓制度
,,,佛教的创立
,欧洲,希腊,希腊城邦
,,,雅典民主
,,罗马,城邦
,,,帝国的征服与扩展
,,希腊罗马古典文化,建筑艺术
,,,公历`;

function spiltString2Array(origin) {
    return origin.split(/\n+/).map(item => item.split(/,/));
}

function array2object(array) {
    let Troot = [];
    let cursor = Troot;
    let previous = [];
    let current = [];
    array.forEach(function (line) {
        cursor = Troot;
        line.forEach(function (word, index) {
            if (!word) {
                word = previous[index];
                cursor = cursor[cursor.length - 1][word];
            } else {
                let temp = {};
                temp[word] = [];
                cursor.push(temp);
                cursor = temp[word];
            }
            current.push(word);
        })
        previous = current;
        current = [];
    })
    return Troot[0];
}

function str2json(origin) {
    let array = spiltString2Array(origin);
    return array2object(array);
}

let result = str2json(origin);

console.dir(result, { depth: null, colors: true });

console.log(JSON.stringify(result, null, 4));