const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const findNegative = (nums) => {
    let negatives = [];
    for (const num of nums) {
        if (num < 0) {
            negatives.push(num)
        }
    }
    return negatives;
}

const row1 = (rowOne) => {
    return findNegative(rowOne);
}

const row2 = (rowTwo) => {
    return findNegative(rowTwo);
}

const row3 = (rowThree) => {
    return findNegative(rowThree);
}


Promise.all([row1(array2D[0]), row2(array2D[1]), row3(array2D[2])])
    .then((negatives) => {
        console.log(negatives)
    })
    .catch((error) => {
        console.error("Unsuccessful Operation");
    });