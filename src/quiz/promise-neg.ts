function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            // Check if the row contains any negative numbers
            const containsNegative = arr[rowIdx].some(e => e < 0);
            if (containsNegative) {
                console.log(`Row ${rowIdx} contains a negative number.`);
                resolve(`Row ${rowIdx} has a negative number.`);
            } else {
                reject(`Row ${rowIdx} has no negative numbers.`);
            }
        } else {
            reject(`Row Index ${rowIdx} out of bounds.`);
        }
    });
}

const array2D_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negsPerRowPromises: Promise<string>[] = [];

for (let x = 0; x < array2D_2.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D_2, x));
}
    
Promise.any(negsPerRowPromises)
    .then((results) => {
        console.log({results});
    })
    .catch((error) => console.log(error));