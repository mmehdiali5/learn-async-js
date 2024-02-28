const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const countTotal = (nums) => {
    let total = 0
    for (const num of nums) {
        total += num;
    }
    return total;
}

// const row1 = (rowOne) => {
//     return countTotal(rowOne);
// }
//
// const row2 = (rowTwo) => {
//     return countTotal(rowTwo);
// }
//
// const row3 = (rowThree) => {
//     return countTotal(rowThree);
// }
//
//
// Promise.all([row1(array2D[0]), row2(array2D[1]), row3(array2D[2])])
//     .then((sums) => {
//         let total = 0;
//         for (const sum of sums) {
//             total += sum;
//         }
//         console.log("Total is " + total);
//     })
//     .catch((error) => {
//         console.error("Unsuccessful Operation");
//     });

const row1 = async (rowOne) => {
    return countTotal(rowOne);
}

const row2 = async (rowTwo) => {
    return countTotal(rowTwo);
}

const row3 = async (rowThree) => {
    return countTotal(rowThree);
}


const calculateSum = async (array2D) => {
    try {
        let sums = await Promise.all([row1(array2D[0]), row2(array2D[1]), row3(array2D[2])])
        let total = 0;
        for (const sum of sums) {
            total += sum;
        }
        console.log("Total is " + total);
    } catch (error) {
        console.error("Unsuccessful Operation");
    }
}

calculateSum(array2D)

