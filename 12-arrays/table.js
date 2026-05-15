function genTree(data, relations) {
    const relationMap = relations.reduce((map, rel) => map.set(`${rel.row},${rel.col}`, rel), new Map())
    const root = []
    _gen(root, data, 0, 0, data[0].length, relationMap)
    return root
    function _gen(children, data, row, colStart, colEnd, relationMap) {
        if (row >= data.length) { return }

        for (let col = colStart; col < colEnd;) {
            const lastSameHeadRel = relationMap.get(`${row - 1},${col}`)
            if (lastSameHeadRel && lastSameHeadRel.row + lastSameHeadRel.rowspan > row) {
                // 跨行占位
                col += lastSameHeadRel.colspan
                break
            }

            let child = {
                label: data[row][col],
                children: []
            }

            children.push(child)

            const relation = relationMap.get(`${row},${col}`)
            const nextRow = row + (relation ? relation.rowspan : 1)
            const nextColStart = col
            const nextColEnd = col + (relation ? relation.colspan : 1)
            _gen(child.children, data, nextRow, nextColStart, nextColEnd, relationMap)

            col = nextColEnd
        }
    }
}

const data = [
    ["报表测试", "", "", "", "", "1"],
    ["单元格", "", "跨行合并", "指标列", "", "2"],
    ["statis_date", "公司", "", "太原", "福州", "4"]
]

const relations = [
    { col: 0, colspan: 5, row: 0, rowspan: 1 },
    { col: 0, colspan: 2, row: 1, rowspan: 1 },
    { col: 2, colspan: 1, row: 1, rowspan: 2 },
    { col: 3, colspan: 2, row: 1, rowspan: 1 },
]

console.log(JSON.stringify(genTree(data, relations), null, '  '))