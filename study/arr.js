const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];


const printArr = data=> {
    const row = arr.length;
    const columns = arr[0].length;
    const res = []
    for(let i = 0; i < columns; i++) {
        let leftC = i;
        let leftR = 0;
        const item = [];
        while(leftC >= 0) {
            item.push(data[leftR][leftC])
            leftC--;
            leftR++;
        }
        res.push(item);
    }

    for(let i = 1; i < row; i++) {
        let leftR = i;
        let leftC = columns - 1;
        const item = [];
        while(leftR < row) {
            item.push(data[leftR][leftC]);
            leftC--;
            leftR++;
        }
        res.push(item)
    }

    return res;


}

console.log(printArr(arr))