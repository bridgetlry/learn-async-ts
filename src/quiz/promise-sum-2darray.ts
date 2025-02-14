function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > rowIdx) {
                let sum = 0;
                console.log(`Computing sum of row ${rowIdx} ... `);
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
            }}, 
        0);
    });
}

async function calculateSum(numArr: number[][]) {
    if (numArr.length === 0) {
        throw new Error('Empty array');
    }
    const rowSumPromisess = [];
    for (let i = 0; i < numArr.length; i++) {
        rowSumPromisess.push(sumOfARow(numArr, i));
    }
    try {
        const rowSums = await Promise.all(rowSumPromisess);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum of 2D array: ${sum}`);
        return 'done';
    }
    catch (err) {
        return err;
    }
}

const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

calculateSum(arr2D).then((status) => console.log(status));
